import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
const directory=path.join(os.homedir(),'.codex/app-signing/blackout-frequency');
const keystore=path.join(directory,'release.p12');
const properties=path.join(directory,'release-signing.properties');
fs.mkdirSync(directory,{recursive:true});
if(fs.existsSync(keystore)!==fs.existsSync(properties))throw new Error('The existing release signing identity is incomplete. Restore its matching keystore and properties before rebuilding.');
if(!fs.existsSync(keystore)){
  const password=crypto.randomBytes(32).toString('hex');
  const keytool=process.env.JAVA_HOME?path.join(process.env.JAVA_HOME,'bin/keytool.exe'):'keytool';
  const generated=spawnSync(keytool,['-genkeypair','-keystore',keystore,'-storetype','PKCS12','-alias','blackout-frequency','-keyalg','RSA','-keysize','4096','-validity','10000','-dname','CN=Blackout Frequency, OU=App Release','-storepass:env','BLACKOUT_SIGNING_PASSWORD','-keypass:env','BLACKOUT_SIGNING_PASSWORD'],{env:{...process.env,BLACKOUT_SIGNING_PASSWORD:password},encoding:'utf8',windowsHide:true});
  if(generated.status!==0)throw new Error('Release signing key creation failed: '+generated.stderr);
  fs.writeFileSync(properties,`storeFile=${keystore.replaceAll('\\','/')}\nstorePassword=${password}\nkeyAlias=blackout-frequency\nkeyPassword=${password}\n`,{mode:0o600});
}
// Only the location is returned; passwords and the private key never enter app assets or logs.
console.log(JSON.stringify({properties,alias:'blackout-frequency',persistent:true}));
