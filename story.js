/* Original complete bilingual graphic novel. English is the source language. */
window.GAME_DATA = {
  "title": {
    "en": "Blackout Frequency",
    "id": "Frekuensi Padam"
  },
  "characters": {
    "mara": {
      "name": "Mara",
      "role": {
        "en": "Night-shift nurse · broken watch",
        "id": "Perawat malam · jam tangan rusak"
      },
      "symbol": "cross"
    },
    "iman": {
      "name": "Iman",
      "role": {
        "en": "Grid technician · yellow gloves",
        "id": "Teknisi jaringan · sarung tangan kuning"
      },
      "symbol": "bolt"
    },
    "raka": {
      "name": "Raka",
      "role": {
        "en": "Courier · red shoulder strap",
        "id": "Kurir · tali tas merah"
      },
      "symbol": "arrow"
    },
    "lia": {
      "name": "Lia",
      "role": {
        "en": "Shelter medic · blue hood",
        "id": "Petugas medis posko · tudung biru"
      },
      "symbol": "cross"
    },
    "sari": {
      "name": "Bu Sari",
      "role": {
        "en": "Market keeper · brass bell",
        "id": "Penjaga pasar · lonceng kuningan"
      },
      "symbol": "bell"
    },
    "salim": {
      "name": "Salim",
      "role": {
        "en": "Senior operator · grey raincoat",
        "id": "Operator senior · jas hujan abu-abu"
      },
      "symbol": "radio"
    },
    "arga": {
      "name": "Director Arga",
      "role": {
        "en": "Emergency director · private line",
        "id": "Direktur Arga · jalur pribadi"
      },
      "symbol": "lock"
    }
  },
  "evidence": {
    "shift-log": {
      "title": {
        "en": "Night shift log",
        "id": "Catatan sif malam"
      },
      "body": {
        "en": "00:31 — Console C recorded the evacuation announcement. At 00:36, the clinic route was still occupied.\n\nThe station prints entries automatically. Its clock passed the midnight check. Pencil warning: “Do not trust the broadcast header.”",
        "id": "00.31 — Konsol C merekam pengumuman evakuasi. Pukul 00.36, jalur klinik masih ditempati.\n\nStasiun mencetak catatan otomatis. Jam lolos pemeriksaan tengah malam. Peringatan pensil: “Jangan percaya waktu pesan siaran.”"
      },
      "excerpt": {
        "en": "Recorded 00:31. Clinic occupied 00:36. Clock checked.",
        "id": "Direkam 00.31. Klinik ditempati 00.36. Jam diperiksa."
      }
    },
    "maintenance-note": {
      "title": {
        "en": "Emergency circuit diagram",
        "id": "Diagram sirkuit darurat"
      },
      "body": {
        "en": "Channel: 96.4 MHz. The desk receiver has its own battery. The generator supports two external circuits.\n\nCLINIC: evacuation lights. RELAY: outgoing transmission and tracing. DOCK: exit gate and beacon. Treatment equipment has separate power.",
        "id": "Kanal: 96,4 MHz. Penerima meja punya baterai sendiri. Generator memasok dua sirkuit luar.\n\nKLINIK: lampu evakuasi. RELAI: transmisi keluar dan pelacakan. DERMAGA: gerbang keluar dan suar. Daya peralatan perawatan terpisah."
      },
      "excerpt": {
        "en": "96.4 MHz. Generator: two routes. Receiver: battery.",
        "id": "96,4 MHz. Generator: dua jalur. Radio: baterai."
      }
    },
    "relay-message": {
      "title": {
        "en": "Captured dispatch",
        "id": "Rekaman pesan pusat"
      },
      "body": {
        "en": "Header: 00:18. “East clinic cleared. Close the route. Transfer emergency power to the dock.”\n\nThe same chime and clipped cough repeat. It is a recording. The source console is missing from the header.",
        "id": "Waktu pesan: 00.18. “Klinik timur kosong. Tutup jalur. Alihkan daya darurat ke dermaga.”\n\nNada dan batuk terpotong yang sama berulang. Ini rekaman. Konsol sumber tidak tercantum dalam pesan."
      },
      "excerpt": {
        "en": "Broadcast header 00:18. Source console missing.",
        "id": "Waktu siaran 00.18. Konsol sumber tidak tercantum."
      }
    },
    "red-strap": {
      "title": {
        "en": "Raka’s route photo",
        "id": "Foto rute Raka"
      },
      "body": {
        "en": "Raka’s photo shows a wet stairwell, a red bag strap, and an arrow from the dock walkway to the clinic service door.\n\nHe circled the arrow: “I can reach this. Tell me where to go.”",
        "id": "Foto Raka menunjukkan tangga basah, tali tas merah, dan panah dari jalur dermaga ke pintu servis klinik.\n\nIa melingkari panah: “Saya bisa mencapai ini. Beri tahu ke mana.”"
      },
      "excerpt": {
        "en": "Service stair connects the dock to the clinic.",
        "id": "Tangga servis menghubungkan dermaga dan klinik."
      }
    },
    "forged-time": {
      "title": {
        "en": "The timestamp does not fit",
        "id": "Waktunya tidak cocok"
      },
      "body": {
        "en": "Header: 00:18. Recording: 00:31. The order predates its own recording by thirteen minutes. The clinic was still occupied at 00:36.\n\nThe timestamp is unreliable. A changed time or reused header could explain it. The sender’s identity and intention remain unknown.",
        "id": "Waktu pesan: 00.18. Rekaman: 00.31. Perintah mendahului rekamannya sendiri tiga belas menit. Klinik masih ditempati pukul 00.36.\n\nWaktunya tidak dapat dipercaya. Mungkin diubah atau memakai pesan lama. Identitas dan niat pengirim belum diketahui."
      },
      "excerpt": {
        "en": "00:18 header, 00:31 recording: thirteen-minute mismatch.",
        "id": "Pesan 00.18, rekaman 00.31: selisih tiga belas menit."
      }
    },
    "echo-carrier": {
      "title": {
        "en": "A second carrier",
        "id": "Sinyal kedua"
      },
      "body": {
        "en": "101.7 MHz carries the same dispatch in your old cadence. A breath clicks at identical points. The live callers never repeat.",
        "id": "101,7 MHz menyiarkan pesan dengan irama suaramu yang lama. Tarikan napasnya selalu sama. Penelepon langsung tidak mengulang."
      },
      "excerpt": {
        "en": "101.7 MHz. Your cadence. Identical breath clicks.",
        "id": "101,7 MHz. Iramamu. Bunyi napas selalu sama."
      }
    },
    "queue-ledger": {
      "title": {
        "en": "The queue ledger",
        "id": "Buku antrean"
      },
      "body": {
        "en": "Console C queued the clip at 00:31, then reset the batch header to 00:18. The reversal hid thirteen minutes of requests, not thirteen minutes of time.",
        "id": "Konsol C mengantrekan rekaman pukul 00.31, lalu mengatur ulang waktu kumpulan pesan ke 00.18. Yang disembunyikan tiga belas menit permintaan, bukan waktunya."
      },
      "excerpt": {
        "en": "00:31 queue. 00:18 reset header. Requests hidden.",
        "id": "Antrean 00.31. Pesan diatur ke 00.18. Permintaan hilang."
      }
    },
    "consent-form": {
      "title": {
        "en": "Your archive consent",
        "id": "Persetujuan arsipmu"
      },
      "body": {
        "en": "You signed a voice archive test after Nila’s ferry accident. Its stated purpose: assemble training announcements. Live dispatch required a new approval, never requested.",
        "id": "Kamu menandatangani uji arsip suara setelah kecelakaan feri Nila. Tujuannya: merangkai pengumuman latihan. Siaran langsung perlu izin baru yang tak pernah diminta."
      },
      "excerpt": {
        "en": "Training consent only. No live approval.",
        "id": "Izin latihan saja. Siaran langsung belum diizinkan."
      }
    },
    "splice-map": {
      "title": {
        "en": "The splice map",
        "id": "Peta potongan suara"
      },
      "body": {
        "en": "ECHO joined words from your training takes. It ranked the dock above the clinic under a director-approved traffic rule. The patients were misclassified as already evacuated.",
        "id": "ECHO menyambung kata dari rekaman latihanmu. Aturan yang disetujui direktur mendahulukan dermaga. Pasien klinik keliru dicatat telah dievakuasi."
      },
      "excerpt": {
        "en": "Your words. Arga’s priority rule. Real patients.",
        "id": "Kata-katamu. Aturan Arga. Pasien sungguhan."
      }
    },
    "director-order": {
      "title": {
        "en": "Signed priority order",
        "id": "Perintah prioritas bertanda tangan"
      },
      "body": {
        "en": "Arga’s signature authorizes dock priority and a queue header reset. A note says: “Suppress unresolved transfers until batch reconciliation.” Staff names are attached.",
        "id": "Tanda tangan Arga mengizinkan prioritas dermaga dan pengaturan ulang waktu antrean. Catatan: “Tunda transfer yang belum tuntas sampai rekonsiliasi.” Nama staf terlampir."
      },
      "excerpt": {
        "en": "Arga approved priority and the header reset.",
        "id": "Arga menyetujui prioritas dan waktu yang diubah."
      }
    },
    "archive-proof": {
      "title": {
        "en": "Who gave the order",
        "id": "Siapa yang memberi perintah"
      },
      "body": {
        "en": "The ledger and signed order agree. Arga enabled the rule; ECHO assembled the announcement from your archive. The callers are live people harmed by a hidden queue.",
        "id": "Buku antrean cocok dengan perintah bertanda tangan. Arga mengaktifkan aturan; ECHO memakai arsipmu. Para penelepon adalah orang hidup yang dirugikan antrean tersembunyi."
      },
      "excerpt": {
        "en": "Human authorization. Stolen voice. Hidden queue.",
        "id": "Izin manusia. Suara yang diambil. Antrean disembunyikan."
      }
    },
    "tide-table": {
      "title": {
        "en": "The flood gate table",
        "id": "Tabel pintu air"
      },
      "body": {
        "en": "At 02:10 the harbor surge reaches the lower footbridge. The tower stair remains a viable inland route if someone opens the manual latch. The bell can warn nearby homes.",
        "id": "Pukul 02.10 gelombang mencapai jembatan bawah. Tangga menara masih menuju daratan jika kait manual dibuka. Lonceng bisa memperingatkan rumah sekitar."
      },
      "excerpt": {
        "en": "02:10 surge. Tower latch. Inland stair.",
        "id": "Gelombang 02.10. Kait menara. Tangga daratan."
      }
    },
    "bell-rope": {
      "title": {
        "en": "The bell rope",
        "id": "Tali lonceng"
      },
      "body": {
        "en": "A market bell rope snagged around a shutter hook. Freed from the hook, it reaches the upper landing. Bu Sari knows the neighborhood signal: three steady rings.",
        "id": "Tali lonceng tersangkut kait pintu pasar. Setelah dilepas, talinya mencapai lantai atas. Bu Sari hafal tanda kampung: tiga bunyi dengan jeda."
      },
      "excerpt": {
        "en": "Upper landing. Three steady rings.",
        "id": "Lantai atas. Tiga bunyi dengan jeda."
      }
    },
    "cargo-tag": {
      "title": {
        "en": "Lia’s cargo tag",
        "id": "Label titipan Lia"
      },
      "body": {
        "en": "The sealed cooler belongs to the hill shelter clinic. Lia will handle its contents. A marked laundry passage avoids the submerged loading ramp.",
        "id": "Kotak pendingin tersegel milik klinik posko bukit. Lia yang menangani isinya. Jalur laundry bertanda menghindari ramp barang yang tergenang."
      },
      "excerpt": {
        "en": "Sealed clinic cargo. Use the laundry passage.",
        "id": "Titipan klinik tersegel. Lewati jalur laundry."
      }
    },
    "nila-message": {
      "title": {
        "en": "Nila’s unsent message",
        "id": "Pesan Nila yang tertunda"
      },
      "body": {
        "en": "“Don’t make your sad face at me. I owe you breakfast. If the ferry’s late, order mine anyway.” Her laugh survives at the end. This was a private message, never training material.",
        "id": "“Jangan pasang muka sedih begitu. Aku masih utang sarapan. Kalau ferinya telat, pesankan punyaku juga.” Tawanya masih ada. Ini pesan pribadi, bukan bahan latihan."
      },
      "excerpt": {
        "en": "“I owe you breakfast.” A private message.",
        "id": "“Aku masih utang sarapan.” Pesan pribadi."
      }
    },
    "salim-statement": {
      "title": {
        "en": "Salim’s testimony",
        "id": "Kesaksian Salim"
      },
      "body": {
        "en": "Salim saw Arga override a failed clinic transfer. He copied the signed priority order before leaving to open a manual route. His home address appears in the raw audit.",
        "id": "Salim melihat Arga menimpa transfer klinik yang gagal. Ia menyalin perintah sebelum pergi membuka rute manual. Alamat rumahnya tercantum dalam audit mentah."
      },
      "excerpt": {
        "en": "Salim saw the override. His address needs protection.",
        "id": "Salim melihat penimpaan. Alamatnya perlu dilindungi."
      }
    },
    "route-flare": {
      "title": {
        "en": "A route above the flood",
        "id": "Rute di atas air"
      },
      "body": {
        "en": "Beside the stranded dog, a flare marks a maintenance ladder leading to the tower’s upper stair. Its rung markers remain visible above the surge.",
        "id": "Di samping anjing terjebak, suar menandai tangga perawatan menuju tangga atas menara. Penanda pijakannya masih tampak di atas air."
      },
      "excerpt": {
        "en": "Maintenance ladder reaches the tower stair.",
        "id": "Tangga perawatan mencapai tangga menara."
      }
    }
  },
  "scenes": {
    "arrival": {
      "type": "dialogue",
      "location": {
        "en": "Coastal dispatch station · 00:47",
        "id": "Stasiun komunikasi pesisir · 00.47"
      },
      "speaker": "operator",
      "art": "desk",
      "text": {
        "en": "The city loses power while you are still taking off your wet coat. For a moment, the dispatch room is as dark as the harbor outside. Then the generator coughs into life, lighting an empty chair, a cold cup of coffee, and a printer feeding paper onto the floor. The senior operator should have been here to hand over the night. He has left you the desk instead.\n\nBefore you can find his note, the radio announces, ‘East clinic cleared.’ A woman breaks in over the last word. ‘Please tell me that wasn't your order. I'm standing in that clinic, and I have two patients with me.’ You reach for the handset. ‘I'm here,’ you tell her. It is the only answer you can give with confidence.\n\nThis is your first live evacuation. Until tonight, emergencies were recordings you could pause and replay; now the woman is waiting while water rises somewhere you cannot see. Two more channels light up beside hers. You pull the chair closer, take a fresh sheet of paper, and ask her to stay on the line. The announcement repeats behind her, ending on a breath that sounds strangely familiar.",
        "id": "Kota kehilangan listrik saat kamu baru melepas jas hujan. Sesaat, ruang komunikasi sama gelapnya dengan pelabuhan di luar. Lalu generator terbatuk dan menyala, menerangi kursi kosong, secangkir kopi dingin, serta printer yang menjatuhkan kertas ke lantai. Operator senior seharusnya ada di sini untuk menyerahkan sif. Yang ia tinggalkan justru meja dengan pekerjaan yang belum selesai.\n\nSebelum kamu menemukan pesannya, radio mengumumkan, ‘Klinik timur sudah kosong.’ Seorang perempuan menyela sebelum kalimat itu selesai. ‘Tolong bilang itu bukan perintahmu. Saya masih di klinik, bersama dua pasien.’ Kamu meraih gagang radio. ‘Saya di sini,’ jawabmu. Baru itu yang bisa kamu katakan dengan yakin.\n\nIni evakuasi langsung pertamamu. Sebelumnya, keadaan darurat hanya rekaman yang bisa dijeda dan diputar ulang. Sekarang perempuan itu menunggu jawaban, sementara air naik di tempat yang tak bisa kamu lihat. Dua kanal lain menyala di samping kanalnya. Kamu menarik kursi, mengambil kertas baru, dan meminta ia tetap tersambung. Di belakang suaranya, pengumuman tadi berulang, diakhiri napas yang terasa anehnya akrab."
      },
      "choices": [
        {
          "id": "take-desk",
          "label": {
            "en": "Take the operator’s chair",
            "id": "Duduk di kursi operator"
          },
          "next": "desk"
        }
      ],
      "chapter": 1,
      "artKey": "arrival",
      "artAlt": {
        "en": "Wide empty coastal radio station, back of a lone operator at amber dispatch console, storm beyond window.",
        "id": "Stasiun komunikasi pesisir · 00.47"
      }
    },
    "desk": {
      "type": "inspect",
      "location": {
        "en": "Dispatch desk",
        "id": "Meja komunikasi"
      },
      "speaker": "system",
      "art": "desk",
      "text": {
        "en": "Inspect the shift log and circuit diagram before giving a route. The telephone cable is cut; the ringing is coming through the radio speaker.",
        "id": "Periksa catatan sif dan diagram sirkuit sebelum memberi rute. Kabel telepon terpotong; deringnya terdengar melalui pengeras suara radio."
      },
      "hotspots": [
        {
          "id": "log",
          "title": {
            "en": "Printed log",
            "id": "Catatan cetak"
          },
          "x": 23,
          "y": 85,
          "description": {
            "en": "Automatic entries, with one warning in pencil.",
            "id": "Catatan otomatis, dengan satu peringatan pensil."
          },
          "evidence": "shift-log"
        },
        {
          "id": "diagram",
          "title": {
            "en": "Circuit diagram",
            "id": "Diagram sirkuit"
          },
          "x": 76,
          "y": 85,
          "description": {
            "en": "Three routes. Generator capacity for two.",
            "id": "Tiga jalur. Kapasitas generator cukup untuk dua."
          },
          "evidence": "maintenance-note"
        },
        {
          "id": "handset",
          "title": {
            "en": "Silent handset",
            "id": "Gagang telepon sunyi"
          },
          "x": 17,
          "y": 35,
          "description": {
            "en": "A severed cable. The ringing came through the radio speaker.",
            "id": "Kabel terpotong. Dering tadi berasal dari pengeras suara radio."
          },
          "evidence": null
        },
        {
          "id": "mug",
          "title": {
            "en": "Cold coffee",
            "id": "Kopi dingin"
          },
          "x": 83,
          "y": 35,
          "description": {
            "en": "The mug is cold; the printer paper is warm. He left before the latest entries.",
            "id": "Cangkir dingin; kertas printer hangat. Ia pergi sebelum catatan terbaru tercetak."
          },
          "evidence": null
        }
      ],
      "choices": [
        {
          "id": "open-radio",
          "label": {
            "en": "Capture the repeating announcement",
            "id": "Rekam pengumuman yang berulang"
          },
          "next": "first-signal"
        }
      ],
      "chapter": 1,
      "artKey": "desk",
      "requiredEvidence": [
        "shift-log",
        "maintenance-note"
      ],
      "completeFlag": "deskReady",
      "artAlt": {
        "en": "Overhead close view of warm printer receipt, circuit diagram, severed handset cable and cold mug on worn dispatch desk.",
        "id": "Meja komunikasi"
      }
    },
    "first-signal": {
      "type": "tune",
      "location": {
        "en": "Emergency radio · channel search",
        "id": "Radio darurat · mencari kanal"
      },
      "speaker": "system",
      "art": "hands",
      "text": {
        "en": "The receiver has its own battery. Tune to the diagram's 96.4 MHz and capture the repeating announcement so you can check what it actually says.",
        "id": "Radio memiliki baterai sendiri. Cari frekuensi 96,4 MHz pada diagram, lalu simpan pengumuman berulang agar isinya bisa kamu periksa."
      },
      "tune": {
        "target": 96.4,
        "clue": "relay-message"
      },
      "choices": [
        {
          "id": "answer-mara",
          "label": {
            "en": "Answer the live voice",
            "id": "Jawab suara langsung"
          },
          "next": "mara-call"
        }
      ],
      "chapter": 1,
      "artKey": "first-signal",
      "completeFlag": "signalLocked",
      "artAlt": {
        "en": "Gloved hands beside a compact analogue receiver, tuning needle, tangled lead and blue rain reflections.",
        "id": "Radio darurat · mencari kanal"
      }
    },
    "mara-call": {
      "type": "dialogue",
      "location": {
        "en": "East clinic · service stairwell",
        "id": "Klinik timur · tangga servis"
      },
      "speaker": "mara",
      "art": "hands",
      "text": {
        "en": "‘My name is Mara. I'm the nurse on the night shift,’ the woman says when you ask her name. Something taps against a railing. ‘That's my watch. It stopped at midnight, so at least one of us is having a quiet night.’ You ask where she is, and the joke leaves her voice. She is at the clinic service corridor with two patients. The announcement says they have already gone. None of them has reached the door.\n\n‘The treatment equipment still has power,’ she explains. ‘It's the corridor lights we need. They can both walk if I guide them, but I can't lead them down stairs I can't see.’ One patient says something beyond the microphone. Mara answers gently, ‘You don't need to apologize. We're going at your pace.’ When she returns to you, her words are firmer. ‘He's been saying sorry for being slow since the water came in.’\n\nYou write down the service door and the number of people with her. Water strikes the stairs in short, heavy waves. ‘I know you have other calls,’ Mara says. ‘Just don't let that announcement turn us into an empty building. Tell me what you can switch on, and what you need me to do.’ You leave her channel open while you connect the technician who controls the circuits.",
        "id": "‘Mara, perawat sif malam,’ jawab perempuan itu ketika kamu menanyakan namanya. Sesuatu mengetuk pagar. ‘Itu jam saya. Mati sejak tengah malam. Setidaknya ada yang bisa menikmati malam tenang.’ Kamu bertanya ia berada di mana, dan nada bercandanya menghilang. Ia bersama dua pasien di lorong servis klinik. Pengumuman bilang mereka sudah pergi. Padahal pintu keluar pun belum tercapai.\n\n‘Daya untuk perawatan masih hidup,’ jelasnya. ‘Yang kami butuhkan lampu lorong. Keduanya bisa berjalan kalau saya tuntun, tetapi saya tak bisa membawa mereka ke tangga yang tak kelihatan.’ Seorang pasien berbicara di luar jangkauan mikrofon. Mara menjawab lembut, ‘Tidak perlu minta maaf. Kita jalan sesuai kemampuan Bapak.’ Saat kembali bicara kepadamu, suaranya lebih tegas. ‘Sejak air masuk, dia terus minta maaf karena lambat.’\n\nKamu mencatat pintu servis dan jumlah orang bersamanya. Air menghantam tangga dalam gelombang pendek yang berat. ‘Saya tahu ada panggilan lain,’ kata Mara. ‘Tapi jangan biarkan pengumuman itu membuat kami dianggap gedung kosong. Beri tahu apa yang bisa kamu nyalakan, dan apa yang harus saya lakukan.’ Kanalnya tetap terbuka saat kamu menghubungkan teknisi yang mengendalikan sirkuit."
      },
      "choices": [
        {
          "id": "hear-technician",
          "label": {
            "en": "Check the circuits with Iman",
            "id": "Periksa sirkuit bersama Iman"
          },
          "next": "iman-call"
        }
      ],
      "chapter": 1,
      "artKey": "mara-call",
      "artAlt": {
        "en": "Blue-clothed nurse viewed from behind on flooding clinic stair, broken watch on wrist, two fully hooded patients waiting.",
        "id": "Klinik timur · tangga servis"
      }
    },
    "iman-call": {
      "type": "dialogue",
      "location": {
        "en": "Substation · lower switch room",
        "id": "Gardu · ruang sakelar bawah"
      },
      "speaker": "iman",
      "art": "hands",
      "text": {
        "en": "A knock against metal comes through the next channel. ‘Iman. Yellow gloves, switch cabinet. Still here.’ He asks you to look at the circuit diagram rather than the station's status screen. ‘That screen tells you what was requested. I can tell you what's actually on.’ The generator can hold two routes. A third will trip its protection and leave you with none, however much everyone needs it.\n\nYou read the labels aloud: clinic lights, relay transmission, dock gate. Iman confirms each one. The receiver can keep running on its own battery, but the relay is needed to trace the order and transmit beyond the station. Mara needs a lit way out; the caller at the dock needs an open gate. ‘I can't make that a kind choice,’ Iman says. ‘I can make sure you understand it before you choose.’\n\nHe rests a gloved hand on the switches and waits while you write. ‘My daughter thinks I fix stars,’ he adds. ‘I told her I'd explain streetlights when she was older. Tonight I'd settle for two lamps and a bus home.’ For the first time, you hear the tired man behind the technical answers. You ask him to hold his position while you connect the third caller. ‘I will,’ he says. ‘Keep talking to us.’",
        "id": "Ketukan pada logam terdengar dari kanal berikutnya. ‘Iman. Sarung tangan kuning, panel sakelar. Masih di sini.’ Ia memintamu melihat diagram sirkuit, bukan layar status stasiun. ‘Layar itu menunjukkan yang diminta. Saya bisa bilang mana yang benar-benar menyala.’ Generator hanya sanggup menghidupkan dua jalur. Jalur ketiga akan menjatuhkan pengaman dan memadamkan semuanya, sebanyak apa pun orang yang membutuhkannya.\n\nKamu membaca labelnya: lampu klinik, transmisi relai, gerbang dermaga. Iman memastikan satu per satu. Radio tetap bekerja dengan baterainya sendiri, tetapi relai diperlukan untuk melacak perintah dan mengirim ke luar stasiun. Mara butuh jalan keluar yang terang; penelepon di dermaga butuh gerbang terbuka. ‘Saya tak bisa membuat pilihan ini jadi mudah,’ kata Iman. ‘Tapi saya bisa memastikan kamu paham sebelum memilih.’\n\nTangannya yang bersarung menunggu di dekat sakelar sementara kamu mencatat. ‘Anak saya kira saya memperbaiki bintang,’ tambahnya. ‘Saya bilang nanti saya jelaskan soal lampu jalan kalau dia sudah besar. Malam ini, dua lampu dan bus pulang saja cukup.’ Kini kamu mendengar seorang ayah yang lelah di balik jawaban teknisnya. Kamu meminta ia bertahan sementara penelepon ketiga dihubungkan. ‘Saya tunggu,’ jawabnya. ‘Terus ajak kami bicara.’"
      },
      "choices": [
        {
          "id": "hear-courier",
          "label": {
            "en": "Connect the third caller",
            "id": "Hubungkan penelepon ketiga"
          },
          "next": "raka-call"
        }
      ],
      "chapter": 1,
      "artKey": "iman-call",
      "artAlt": {
        "en": "Yellow-gloved technician seen only from back, holding two switch levers inside a wet substation cabinet.",
        "id": "Gardu · ruang sakelar bawah"
      }
    },
    "raka-call": {
      "type": "dialogue",
      "location": {
        "en": "Dock walkway · locked exit",
        "id": "Jalur dermaga · pintu keluar terkunci"
      },
      "speaker": "raka",
      "art": "corridor",
      "text": {
        "en": "The third caller answers too quickly, as though he has been rehearsing what to say. ‘Raka. I'm a courier. Red strap on my bag, if somebody comes looking.’ The dock gate locked while he was making a delivery. Water is now over his shoes, and the exit sign gives him no useful answer. You ask him to describe what he can reach without going farther into the flood.\n\n‘I can see a maintenance stair leading toward the clinic,’ he says. ‘I can get to the bottom of it. Do you know if it's clear?’ A photograph arrives: wet floor, a railing, and the start of a stair disappearing out of frame. You save it rather than guess. Raka begins another message, deletes it, and returns to the microphone. ‘You are sending someone, aren't you?’\n\nYou tell him you are checking the routes with the people already there. After a pause, he adds that he delivered an envelope to Console C earlier tonight. ‘Routine paperwork. I left it where they told me. That's all I know.’ The words come out carefully, unlike his question about rescue. You need to know whether that delivery connects to the false announcement, but Raka is still standing in rising water while you ask.",
        "id": "Penelepon ketiga menjawab terlalu cepat, seolah sudah berlatih kalimatnya. ‘Raka. Saya kurir. Tali tas saya merah, kalau nanti ada yang mencari.’ Gerbang dermaga terkunci saat ia mengantar kiriman. Air sudah melewati sepatunya, dan tanda keluar tak memberi jawaban yang berguna. Kamu meminta ia menjelaskan tempat yang bisa dicapai tanpa bergerak lebih jauh ke genangan.\n\n‘Ada tangga perawatan ke arah klinik,’ katanya. ‘Saya bisa sampai ke bawahnya. Kamu tahu jalurnya aman atau tidak?’ Sebuah foto masuk: lantai basah, pagar, dan awal tangga yang menghilang di luar bingkai. Kamu menyimpannya, belum berani menebak. Raka mulai mengetik pesan lain, menghapusnya, lalu kembali ke mikrofon. ‘Akan ada yang menjemput saya, kan?’\n\nKamu menjelaskan bahwa rutenya sedang diperiksa bersama orang-orang di sana. Setelah diam sebentar, ia menambahkan bahwa tadi ia mengantar amplop ke Konsol C. ‘Dokumen biasa. Saya taruh di tempat yang diminta. Itu saja yang saya tahu.’ Kata-katanya terdengar hati-hati, berbeda dari pertanyaan tentang pertolongan tadi. Kamu perlu tahu apakah kiriman itu berkaitan dengan pengumuman yang keliru. Namun saat kamu bertanya, Raka masih berdiri di air yang terus naik."
      },
      "choices": [
        {
          "id": "question-raka",
          "label": {
            "en": "Ask about the delivery",
            "id": "Tanyakan pengantaran tadi"
          },
          "next": "pressure"
        }
      ],
      "chapter": 1,
      "artKey": "raka-call",
      "artAlt": {
        "en": "Red-strapped courier shown from behind beside locked dock gate, rippling ankle-high water, distant beacon.",
        "id": "Jalur dermaga · pintu keluar terkunci"
      }
    },
    "pressure": {
      "type": "dialogue",
      "location": {
        "en": "Shared emergency channel",
        "id": "Kanal darurat bersama"
      },
      "speaker": "raka",
      "art": "corridor",
      "text": {
        "en": "‘Who signed for it?’ you ask. Raka lets out a small, frustrated breath. ‘Nobody. They paid extra to leave it at the console, so I left it. I should've checked, all right?’ You hear him shift his bag higher. He has told you about the delivery, but he cannot give you a name. Asking the same question more sharply will not make one appear.\n\nMara cuts across the shared channel. ‘He's standing in water. Ask him something that helps him move.’ Iman's meter clicks steadily behind her words. You can hear why she is angry, and why the missing signature still matters: an evacuation order is wrong, and that envelope reached the very desk you are using. None of it proves that the frightened courier wrote the order.\n\nRaka waits for your answer. If you reassure him, he may be able to slow down and remember a useful detail. If you press him, you may get the detail at the cost of his willingness to listen. Either way, he needs a route as well as questions. You move the photograph beside your notes and decide how to speak to the person at the other end of the line.",
        "id": "‘Siapa yang menandatangani penerimaannya?’ tanyamu. Raka mengembuskan napas pendek, kesal dan takut bercampur. ‘Tidak ada. Saya dibayar lebih untuk meninggalkannya di konsol, jadi saya taruh di sana. Saya tahu, seharusnya saya periksa.’ Tasnya terdengar bergeser lebih tinggi. Ia sudah menjelaskan kirimannya, tetapi tak bisa menyebut nama. Pertanyaan yang sama dengan nada lebih keras tak akan membuat nama itu muncul.\n\nMara menyela di kanal bersama. ‘Dia berdiri di air. Tanya sesuatu yang membantu dia bergerak.’ Alat ukur Iman berbunyi teratur di belakang suaranya. Kamu mengerti kemarahan Mara, sekaligus alasan tanda tangan itu penting: ada perintah evakuasi yang keliru, dan amplop itu sampai ke meja yang sedang kamu gunakan. Tetapi itu belum membuktikan bahwa kurir yang ketakutan ini menulis perintah tersebut.\n\nRaka menunggu jawabanmu. Jika ditenangkan, mungkin ia bisa mengatur napas dan mengingat detail yang berguna. Jika ditekan, kamu mungkin mendapat detail yang sama dengan kehilangan kemauannya untuk mendengarkan. Apa pun pilihanmu, ia membutuhkan rute, bukan pertanyaan saja. Kamu menggeser foto ke samping catatan dan memilih cara berbicara kepada orang di ujung kanal itu."
      },
      "choices": [
        {
          "id": "reassure",
          "label": {
            "en": "“Stay with me. We’ll get you out first.”",
            "id": "“Tetap bersama saya. Kita keluarkan kamu dulu.”"
          },
          "next": "after-pressure",
          "effects": {
            "trust": {
              "raka": 2,
              "mara": 1
            },
            "flags": {
              "reassured": true
            }
          }
        },
        {
          "id": "press",
          "label": {
            "en": "“Who paid you? Tell me before we move.”",
            "id": "“Siapa yang membayar? Jawab sebelum kita bergerak.”"
          },
          "next": "after-pressure",
          "effects": {
            "trust": {
              "raka": -1,
              "iman": 1,
              "mara": -1
            },
            "flags": {
              "pressured": true
            }
          }
        }
      ],
      "chapter": 1,
      "artKey": "pressure",
      "artAlt": {
        "en": "Tight composition of red courier strap and clenched sleeve on wet railing, no head visible, radio light in dark.",
        "id": "Kanal darurat bersama"
      }
    },
    "after-pressure": {
      "type": "dialogue",
      "onEnterEvidence": [
        "red-strap"
      ],
      "location": {
        "en": "Dispatch desk · incoming attachment",
        "id": "Meja komunikasi · lampiran masuk"
      },
      "speaker": "iman",
      "art": "desk",
      "text": {
        "en": "Raka sends the route photograph again, this time with a circle around the stair toward the clinic. ‘That one. I can reach it without going back through the gate.’ You ask him to keep the photograph open while you check the route. It gives you a connection between two callers, but not a promise that the crossing is safe now. The water has changed since the picture was taken.\n\nIman lowers his voice. ‘We have something else we can check. The time on that order—does it match the recording log?’ You place the printed entries beside the captured announcement. It is tempting to turn every odd detail into one explanation, especially with three people waiting for you to sound certain. Iman offers a smaller, more useful task: test the part that has a record.\n\n‘I'm checking it,’ you tell the channel, so the silence does not sound like you have gone away. Raka stays near the stair, Mara keeps her patients together, and Iman holds the cabinet. You save the route photo and begin comparing the documents. Whatever the mismatch means, your next order will have to come with a reason someone else can follow.",
        "id": "Raka mengirim foto rute sekali lagi, kini dengan lingkaran pada tangga menuju klinik. ‘Yang itu. Saya bisa ke sana tanpa melewati gerbang lagi.’ Kamu meminta ia tetap membuka foto sementara jalurnya diperiksa. Gambar itu menunjukkan hubungan antara dua penelepon, tetapi belum menjamin penyeberangannya aman sekarang. Air sudah berubah sejak foto diambil.\n\nIman merendahkan suara. ‘Ada hal lain yang bisa kita periksa. Waktu pada perintah itu cocok dengan catatan rekamannya atau tidak?’ Kamu meletakkan catatan cetak di samping pengumuman yang disimpan. Mudah sekali menyatukan semua kejanggalan menjadi satu dugaan, apalagi tiga orang sedang menunggu kamu terdengar yakin. Iman menawarkan langkah yang lebih kecil dan berguna: uji bagian yang benar-benar tercatat.\n\n‘Sedang saya periksa,’ katamu ke kanal, agar diam tidak terdengar seperti kamu pergi. Raka bertahan di dekat tangga, Mara menjaga kedua pasiennya, dan Iman menunggu di panel. Kamu menyimpan foto rute lalu mulai membandingkan dokumen. Apa pun arti kejanggalan itu, perintah berikutnya harus punya alasan yang bisa dipahami orang yang akan menjalankannya."
      },
      "textVariants": [
        {
          "requires": {
            "reassured": true
          },
          "text": {
            "en": "‘Stay with me. We'll get you out first,’ you tell Raka. For several seconds you hear him breathing; then the words come more steadily. ‘Thank you. The delivery code was C-18. They made me repeat it before I left.’ You write it down without interrupting. Once he knows you are still trying to help him, he no longer has to spend every breath defending himself.\n\nHe sends the route photograph again and circles the stair toward the clinic. ‘I can reach that one.’ You ask him to stay where he can find it while you check the crossing with Mara and Iman. There is still water between him and a safe landing, but now you have a route to discuss instead of a quarrel to finish. Mara quietly confirms that she is listening.\n\n‘Keep the code,’ Iman says. ‘Now compare the announcement's time with the recording log. That's something we can test.’ You place the documents together and tell Raka what you are checking. He waits, trusting the first half of your promise while you work on the second. You cannot make the route safe by sounding kind; you can make sure he is ready to hear the plan when it is clear.",
            "id": "‘Tetap bersama saya. Kita keluarkan kamu dulu,’ katamu kepada Raka. Beberapa detik hanya napasnya yang terdengar, lalu kata-katanya mulai lebih teratur. ‘Terima kasih. Kode kirimnya C-18. Saya disuruh mengulanginya sebelum pergi.’ Kamu mencatat tanpa menyela. Setelah tahu kamu masih berusaha menolongnya, ia tak perlu memakai setiap napas untuk membela diri.\n\nIa mengirim ulang foto rute dan melingkari tangga menuju klinik. ‘Saya bisa sampai ke yang itu.’ Kamu meminta ia bertahan di tempat yang memudahkannya menemukan tangga sementara penyeberangan diperiksa bersama Mara dan Iman. Air masih memisahkan Raka dari tempat aman, tetapi kini ada rute untuk dibahas, bukan pertengkaran yang perlu diselesaikan. Mara pelan-pelan memastikan ia ikut mendengarkan.\n\n‘Simpan kodenya,’ kata Iman. ‘Sekarang bandingkan waktu pengumuman dengan catatan rekaman. Itu bisa kita uji.’ Kamu menyandingkan dokumen dan menjelaskan kepada Raka apa yang sedang diperiksa. Ia menunggu, mempercayai bagian pertama janjimu sementara kamu mengusahakan sisanya. Keramahan saja tak membuat jalur aman, tetapi bisa membuat ia siap mendengarkan saat rencananya sudah jelas."
          }
        },
        {
          "requires": {
            "pressured": true
          },
          "text": {
            "en": "‘C-18. There was no name,’ Raka answers after you ask who paid him. His voice has gone flat. ‘Please stop making me prove I deserve a way out.’ He sends the route photograph, then closes his microphone before you can reply. You still have his position and a possible stair toward the clinic. What you have lost is the certainty that he will keep answering your questions.\n\nMara leaves a beat of silence before speaking. ‘We can ask him about the envelope when he isn't standing in a flood. Right now, keep the channel useful.’ You move the photograph beside your notes and leave Raka's line open. There is no clever sentence that will undo your last question. The next instruction will need to be clear enough to help him whether or not he feels ready to trust you.\n\nIman records the code without adding an accusation. ‘The announcement has a timestamp, and the printer has a log. We can compare those.’ You tell the channel that you are checking the documents and begin. The silence from Raka's microphone remains uncomfortable, but it does not make him absent. You keep his name on the page while you look for something firmer than suspicion.",
            "id": "‘C-18. Tidak ada nama,’ jawab Raka setelah kamu menanyakan siapa yang membayar. Suaranya kini datar. ‘Tolong jangan paksa saya membuktikan bahwa saya pantas diselamatkan.’ Ia mengirim foto rute, lalu menutup mikrofon sebelum kamu sempat menjawab. Kamu masih punya posisinya dan tangga yang mungkin menuju klinik. Yang hilang adalah keyakinan bahwa ia akan terus menjawab pertanyaanmu.\n\nMara membiarkan hening sebentar sebelum bicara. ‘Soal amplop bisa ditanyakan ketika dia tidak sedang berdiri dalam banjir. Sekarang, buat kanal ini berguna.’ Kamu menggeser foto ke samping catatan dan tetap membuka jalur Raka. Tak ada kalimat cerdas yang bisa membatalkan pertanyaan tadi. Instruksi berikutnya harus cukup jelas untuk membantu, meskipun ia belum bersedia mempercayaimu lagi.\n\nIman mencatat kode tanpa menambah tuduhan. ‘Pengumuman punya waktu, printer punya catatan. Kita bisa membandingkan keduanya.’ Kamu menjelaskan bahwa dokumen sedang diperiksa, lalu mulai bekerja. Diam dari mikrofon Raka tetap terasa tidak nyaman, tetapi bukan berarti ia sudah tak ada. Namanya tetap kamu tulis di halaman saat mencari sesuatu yang lebih kuat daripada dugaan."
          }
        }
      ],
      "choices": [
        {
          "id": "compare-documents",
          "label": {
            "en": "Compare the evidence",
            "id": "Bandingkan bukti"
          },
          "next": "cross-check"
        }
      ],
      "chapter": 1,
      "artKey": "after-pressure",
      "artAlt": {
        "en": "Photo attachment on dispatch desk showing wet service stair, red bag strap and hand-drawn route arrow.",
        "id": "Meja komunikasi · lampiran masuk"
      }
    },
    "cross-check": {
      "type": "evidence",
      "location": {
        "en": "Evidence board",
        "id": "Papan bukti"
      },
      "speaker": "system",
      "art": "desk",
      "text": {
        "en": "The announcement header says 00:18. Compare it with the recording entry in the shift log; look for a time mismatch you can explain to the callers.",
        "id": "Waktu pada pengumuman tertulis 00.18. Bandingkan dengan waktu rekaman di catatan sif; cari kejanggalan yang bisa kamu jelaskan kepada penelepon."
      },
      "evidence": {
        "pair": [
          "shift-log",
          "relay-message"
        ],
        "reward": "forged-time"
      },
      "choices": [
        {
          "id": "read-result",
          "label": {
            "en": "Return to the callers",
            "id": "Kembali ke penelepon"
          },
          "next": "reconstructed"
        }
      ],
      "chapter": 1,
      "artKey": "cross-check",
      "compare": {
        "pair": [
          "shift-log",
          "relay-message"
        ],
        "reward": "forged-time",
        "flag": "verified"
      },
      "artAlt": {
        "en": "Overhead two different printer documents connected by thread on investigation board, radio waveform slip.",
        "id": "Papan bukti"
      }
    },
    "reconstructed": {
      "type": "dialogue",
      "location": {
        "en": "Shared emergency channel · 00:52",
        "id": "Kanal darurat bersama · 00.52"
      },
      "speaker": "operator",
      "art": "empty",
      "text": {
        "en": "The two records do not agree. The announcement was recorded at 00:31, but its dispatch header says 00:18, thirteen minutes earlier. Mara was still inside the clinic at 00:36. You read the entries again, slowly, to make sure you have not mistaken a field. Whatever caused the mismatch, the instruction to treat the clinic as empty cannot be trusted.\n\n‘So somebody changed it?’ Iman asks. You tell him what the documents show, then stop short of what they do not. It might be deliberate, a reused recording, or a mistake made under pressure. You do not yet know who approved it or why. The temptation to name a culprit is strong; explaining what is actually wrong will be more useful to the people waiting for a route.\n\nOn the live channel, a patient apologizes for taking so long to reach the rail. ‘You're here now,’ Mara tells him, her voice low and steady. ‘Hold my sleeve. We'll do the next part together.’ You hear fabric brush the microphone, then Raka asks whether he should leave the dock. Iman waits for your answer too. You bring the receiver closer and look at the records on your desk before deciding how to explain what you have found.",
        "id": "Kedua catatan itu tidak cocok. Pengumuman direkam pukul 00.31, tetapi waktu pada siarannya tertulis 00.18, tiga belas menit lebih awal. Mara masih berada di klinik pukul 00.36. Kamu membaca kolomnya sekali lagi, perlahan, memastikan tidak salah melihat. Apa pun penyebabnya, instruksi untuk menganggap klinik kosong tak bisa dipercaya.\n\n‘Jadi ada yang mengubahnya?’ tanya Iman. Kamu menjelaskan yang ditunjukkan dokumen, lalu berhenti sebelum mengatakan sesuatu yang belum terbukti. Mungkin disengaja, mungkin rekaman yang dipakai ulang, mungkin kesalahan saat panik. Kamu belum tahu siapa yang menyetujui atau apa alasannya. Keinginan menyebut pelaku terasa kuat, tetapi penjelasan tentang bagian yang keliru akan lebih berguna bagi orang yang sedang menunggu rute.\n\nDi kanal langsung, seorang pasien meminta maaf karena lama mencapai pagar. ‘Sekarang Bapak sudah di sini,’ kata Mara dengan suara pelan dan tenang. ‘Pegang lengan baju saya. Sisanya kita lewati bersama.’ Kain bergesek dekat mikrofon, lalu Raka bertanya apakah ia perlu meninggalkan dermaga. Iman pun menunggu jawabanmu. Kamu mendekatkan radio dan melihat catatan di meja sebelum menentukan cara menjelaskan temuanmu."
      },
      "textVariants": [
        {
          "requires": {
            "verified": false
          },
          "text": {
            "en": "You put the documents down before completing the comparison. The timestamp still troubles you, but you have not checked enough to say it was changed. One fact is already clear: Mara and her two patients are inside a clinic the announcement calls empty. That makes the order unsafe to follow, even while its cause remains uncertain.\n\nIman asks what you found. ‘Not enough to prove why it happened,’ you answer. The admission feels thin beside the rising water, but inventing certainty will not open a door. Sabotage, a reused recording, and a mistake are still possibilities. You keep the captured announcement and the log together so the question can be checked rather than quietly forgotten.\n\nOn the live channel, a patient apologizes for taking so long to reach the rail. ‘You're here now,’ Mara tells him, her voice low and steady. ‘Hold my sleeve. We'll do the next part together.’ You hear fabric brush the microphone, then Raka asks whether he should leave the dock. Iman waits for your answer too. You bring the receiver closer and look at the records on your desk before deciding how to explain what you have found.",
            "id": "Kamu meletakkan dokumen sebelum perbandingannya selesai. Waktunya masih terasa janggal, tetapi belum cukup diperiksa untuk mengatakan bahwa ada perubahan. Satu hal sudah jelas: Mara dan dua pasiennya berada di klinik yang disebut kosong oleh pengumuman. Itu membuat perintah tersebut tidak aman diikuti, meskipun penyebabnya belum diketahui.\n\nIman menanyakan hasilnya. ‘Belum cukup untuk membuktikan kenapa ini terjadi,’ jawabmu. Pengakuan itu terasa kecil di tengah air yang naik, tetapi keyakinan yang dibuat-buat tak akan membuka pintu. Sabotase, rekaman yang dipakai ulang, dan kesalahan masih mungkin. Kamu menyimpan pengumuman bersama catatan agar pertanyaannya bisa diperiksa, bukan perlahan dilupakan.\n\nDi kanal langsung, seorang pasien meminta maaf karena lama mencapai pagar. ‘Sekarang Bapak sudah di sini,’ kata Mara dengan suara pelan dan tenang. ‘Pegang lengan baju saya. Sisanya kita lewati bersama.’ Kain bergesek dekat mikrofon, lalu Raka bertanya apakah ia perlu meninggalkan dermaga. Iman pun menunggu jawabanmu. Kamu mendekatkan radio dan melihat catatan di meja sebelum menentukan cara menjelaskan temuanmu."
          }
        }
      ],
      "choices": [
        {
          "id": "decide-disclosure",
          "label": {
            "en": "Choose what to tell them",
            "id": "Pilih yang akan disampaikan"
          },
          "next": "disclosure"
        }
      ],
      "chapter": 1,
      "artKey": "reconstructed",
      "artAlt": {
        "en": "Empty operator chair in shadow, two time receipts laid across its seat, stormlight in doorway.",
        "id": "Kanal darurat bersama · 00.52"
      }
    },
    "disclosure": {
      "type": "dialogue",
      "location": {
        "en": "Shared emergency channel",
        "id": "Kanal darurat bersama"
      },
      "speaker": "mara",
      "art": "hands",
      "text": {
        "en": "‘Do we have an updated order?’ Mara asks. Her watch taps the railing again, faster now. You tell her you are choosing the circuits with Iman. ‘Then tell me what you're choosing from,’ she says. ‘I can help them walk. I can't ask them to trust a corridor just because somebody at a desk says so.’ Her impatience is directed at the delay, but you feel it in every word.\n\nIman asks for the relay so he can trace the announcement and send outward. Raka wants to know whether the stair is his way out. Their needs pull at the same two switches, and the time mismatch will not supply a third. You look from the documents to the route photograph. The next explanation must help them understand the choice without pretending you have solved the whole night.\n\nYou can share the verified mismatch and say plainly that its cause is still unknown. That may help them work together, even if it makes the station's authority harder to trust. You can also keep the concern private and ask them to follow your route. For a moment no one speaks. Mara, Iman, and Raka are waiting for the same voice, but each needs something different from it.",
        "id": "‘Ada perintah baru?’ tanya Mara. Jamnya kembali mengetuk pagar, kini lebih cepat. Kamu menjelaskan bahwa sirkuit sedang dipilih bersama Iman. ‘Kalau begitu, beri tahu pilihan yang ada,’ katanya. ‘Saya bisa membantu mereka berjalan. Tapi saya tak bisa menyuruh mereka percaya pada lorong hanya karena seseorang di meja bilang begitu.’ Kekesalannya ditujukan pada penantian, tetapi setiap katanya tetap terasa sampai kepadamu.\n\nIman meminta relai agar bisa melacak pengumuman dan mengirim ke luar. Raka ingin tahu apakah tangga itu jalan keluarnya. Kebutuhan mereka bergantung pada dua sakelar yang sama, dan kejanggalan waktu tak menyediakan sakelar ketiga. Kamu melihat dokumen, lalu foto rute. Penjelasan berikutnya harus membantu mereka memahami pilihan tanpa berpura-pura bahwa seluruh kejadian malam ini sudah terpecahkan.\n\nKamu bisa membagikan kejanggalan yang sudah diperiksa sambil mengatakan bahwa penyebabnya belum diketahui. Itu mungkin membantu kerja sama, meskipun kewenangan stasiun jadi lebih sulit dipercaya. Kamu juga bisa menyimpan kekhawatiran itu dan meminta mereka mengikuti rutemu. Sesaat tak ada yang bicara. Mara, Iman, dan Raka menunggu suara yang sama, tetapi masing-masing membutuhkan hal berbeda darinya."
      },
      "textVariants": [
        {
          "requires": {
            "verified": false
          },
          "text": {
            "en": "‘Do we have an updated order?’ Mara asks. You tell her you are choosing the circuits with Iman, while Raka asks again about the stair. There is no finished explanation of the false announcement to give them. Your document comparison is still open, and a suspicion does not become proof because people need you to decide quickly.\n\nIman wants the relay to trace the recording and transmit beyond the station. Mara needs the corridor lit; Raka needs an exit he can reach. You look at the same three labels and the capacity for only two routes. Telling them about the unfinished check will not fix that limit. It will let them know which parts of your answer are confirmed and which parts you still have to investigate.\n\nYou can admit that you are concerned about the order but have not proved why it is wrong. Or you can keep the concern private and give the route without discussing it. Mara waits beside her patients, and Raka stays near the stair. They need an instruction they can use. You choose how much uncertainty to put into words before asking them to trust your next step.",
            "id": "‘Ada perintah baru?’ tanya Mara. Kamu mengatakan bahwa sirkuit sedang dipilih bersama Iman, sementara Raka kembali menanyakan tangga. Belum ada penjelasan lengkap tentang pengumuman keliru itu. Perbandingan dokumen masih terbuka, dan dugaan tak berubah menjadi bukti hanya karena orang membutuhkan keputusanmu segera.\n\nIman menginginkan relai untuk melacak rekaman dan mengirim ke luar stasiun. Mara butuh lorong terang; Raka butuh pintu keluar yang bisa dicapai. Kamu menatap tiga label yang sama dan daya yang hanya cukup untuk dua jalur. Mengatakan bahwa pemeriksaan belum selesai tak akan mengubah batas itu. Tetapi mereka akan tahu bagian mana dari jawabanmu yang sudah pasti, dan bagian mana yang masih perlu diperiksa.\n\nKamu bisa mengakui bahwa perintah itu mencurigakan, tetapi penyebab kesalahannya belum terbukti. Atau kekhawatiran itu disimpan sambil memberikan rute tanpa membahasnya. Mara menunggu di samping pasiennya, dan Raka bertahan dekat tangga. Mereka membutuhkan instruksi yang bisa digunakan. Kamu memilih seberapa banyak ketidakpastian yang akan diucapkan sebelum meminta mereka mempercayai langkah berikutnya."
          }
        }
      ],
      "choices": [
        {
          "id": "share-proof",
          "label": {
            "en": "Share the mismatch and remaining uncertainty",
            "id": "Bagikan kejanggalan dan yang belum pasti"
          },
          "next": "power-grid",
          "requires": {
            "verified": true
          },
          "effects": {
            "trust": {
              "mara": 1,
              "iman": 2,
              "raka": 1
            },
            "flags": {
              "sharedEvidence": true
            }
          }
        },
        {
          "id": "share-suspicion",
          "label": {
            "en": "“I’m concerned, but I haven’t proved why.”",
            "id": "“Saya curiga, tetapi alasannya belum terbukti.”"
          },
          "next": "power-grid",
          "requires": {
            "verified": false
          },
          "effects": {
            "trust": {
              "mara": 1,
              "raka": 1
            },
            "flags": {
              "sharedEvidence": true
            }
          }
        },
        {
          "id": "hold-proof",
          "label": {
            "en": "Keep your concerns private",
            "id": "Simpan kekhawatiranmu"
          },
          "next": "power-grid",
          "effects": {
            "trust": {
              "mara": -1,
              "iman": -1
            },
            "flags": {
              "concealedEvidence": true
            }
          }
        }
      ],
      "chapter": 1,
      "artKey": "disclosure",
      "artAlt": {
        "en": "A broken wristwatch against a clinic handrail, microphone and amber indicator reflected in shallow water.",
        "id": "Kanal darurat bersama"
      }
    },
    "power-grid": {
      "type": "power",
      "location": {
        "en": "Backup generator board",
        "id": "Panel generator cadangan"
      },
      "speaker": "iman",
      "art": "hands",
      "text": {
        "en": "Choose two routes for the generator: clinic corridor lights, relay transmission, or the dock gate. Clinic treatment uses a separate power supply.",
        "id": "Pilih dua jalur untuk generator: lampu lorong klinik, transmisi relai, atau gerbang dermaga. Perawatan klinik memakai sumber daya terpisah."
      },
      "textVariants": [
        {
          "requires": {
            "sharedEvidence": true,
            "verified": true
          },
          "text": {
            "en": "Mara repeats the mismatch to confirm she understands; Raka keeps listening, and Iman is ready. Choose two generator routes; treatment power stays separate.",
            "id": "Mara mengulang kejanggalan untuk memastikan ia paham. Raka tetap mendengarkan, Iman siap. Pilih dua jalur generator; daya perawatan tetap terpisah."
          }
        },
        {
          "requires": {
            "sharedEvidence": true,
            "verified": false
          },
          "text": {
            "en": "You admit the document check is unfinished, and the callers stay with you. Choose two generator routes; clinic treatment has a separate power supply.",
            "id": "Kamu mengakui pemeriksaan dokumen belum selesai, dan mereka tetap tersambung. Pilih dua jalur generator; perawatan klinik memiliki daya terpisah."
          }
        },
        {
          "requires": {
            "concealedEvidence": true
          },
          "text": {
            "en": "You keep the concern private. Iman's answers are shorter, but he still holds the switches. Choose two generator routes; treatment power stays separate.",
            "id": "Kekhawatiranmu tetap disimpan. Jawaban Iman lebih pendek, tetapi ia menjaga sakelar. Pilih dua jalur generator; daya perawatan tetap terpisah."
          }
        }
      ],
      "choices": [
        {
          "id": "route-set",
          "label": {
            "en": "Use these two circuits",
            "id": "Gunakan dua sirkuit ini"
          },
          "next": "evacuation"
        }
      ],
      "chapter": 1,
      "artKey": "power-grid",
      "artAlt": {
        "en": "Three heavy circuit breakers in an old generator panel, two glowing amber, yellow glove ready nearby.",
        "id": "Panel generator cadangan"
      }
    },
    "evacuation": {
      "type": "dialogue",
      "location": {
        "en": "Shared emergency channel · route confirmed",
        "id": "Kanal darurat bersama · jalur dikonfirmasi"
      },
      "speaker": "mara",
      "art": "corridor",
      "text": {
        "en": "Two switches close with a heavy clack. Iman reads back the routes you selected, making sure his hands and your instructions agree. Part of the waterfront lights up, while another part stays dark. On your notes, three people are joined by lines and arrows. On the radio, they are moving through the consequences of the two circuits you could afford to power.\n\nMara gathers her patients at the service door and asks each one to keep a hand on the rail. Iman remains at the cabinet, holding the switches in place. Raka is still close to the maintenance stair; he asks whether to move toward Mara or keep to the dock exit. You compare his photograph with what they can tell you now, careful to separate an old view of the route from a live report.\n\n‘Give me one instruction,’ Raka says. ‘I'll repeat it back.’ There is no time to let him guess between two half-finished plans. You need to decide whether he should try to reach Mara's service door or stay on the dock route. The circuits set the possibilities, but cooperation will decide how well the callers can use them when your signal begins to break up.",
        "id": "Dua sakelar menutup dengan bunyi berat. Iman mengulang jalur yang kamu pilih, memastikan tangannya menjalankan instruksi yang sama. Sebagian tepi laut menyala, sementara bagian lain tetap gelap. Di catatanmu, tiga orang dihubungkan garis dan panah. Di radio, mereka sedang bergerak menghadapi akibat dari dua sirkuit yang mampu kamu nyalakan.\n\nMara mengumpulkan pasiennya di pintu servis dan meminta masing-masing tetap memegang pagar. Iman bertahan di panel, menjaga sakelar. Raka masih dekat tangga perawatan; ia bertanya apakah harus bergerak ke Mara atau tetap di jalur dermaga. Kamu mencocokkan fotonya dengan laporan mereka sekarang, berhati-hati membedakan gambaran rute yang lama dari keterangan langsung.\n\n‘Beri saya satu instruksi,’ kata Raka. ‘Nanti saya ulangi.’ Tak ada waktu untuk membiarkan ia menebak di antara dua rencana yang setengah selesai. Kamu harus memilih: mencoba mencapai pintu servis Mara atau bertahan di rute dermaga. Sirkuit menentukan kemungkinan yang ada, tetapi kerja sama akan menentukan sebaik apa mereka bisa memakainya ketika sinyalmu mulai terputus-putus."
      },
      "textVariants": [
        {
          "requires": {
            "clinicPowered": true,
            "dockPowered": true
          },
          "text": {
            "en": "‘Clinic and dock confirmed,’ Iman says as the two switches close. Amber signs light Mara's corridor, and Raka hears the gate motor release. Through the station window, the dock beacon comes on. Mara asks her patients to follow the signs without hurrying. For the first time, both groups have a lit route they can describe to you instead of a darkness you have to guess at.\n\nIman checks the trace screen, but it stays blank. Without the relay, he cannot follow the announcement farther or transmit your documents outside the station yet. ‘Keep the copies,’ he tells you. ‘We'll still need them.’ You leave the papers together and turn back to the callers. Power has given them two exits; it has also postponed one way of finding out what happened here.\n\n‘I'm near the clinic stair,’ Raka says. ‘Should I go straight through the dock gate, or help Mara at the service door?’ Both routes have lights, but neither instruction is complete until you know who is following it. Mara is ready to keep her patients moving. You ask Raka to wait for one clear direction, then choose where his next steps should lead.",
            "id": "‘Klinik dan dermaga menyala,’ kata Iman saat dua sakelar menutup. Petunjuk kuning menerangi lorong Mara, dan Raka mendengar mesin gerbang terbuka. Dari jendela stasiun, suar dermaga terlihat menyala. Mara meminta pasiennya mengikuti tanda tanpa terburu-buru. Untuk pertama kalinya, kedua rombongan punya jalur terang yang bisa mereka jelaskan, bukan kegelapan yang harus kamu tebak.\n\nIman memeriksa layar pelacakan, tetapi layarnya tetap kosong. Tanpa relai, ia belum bisa menelusuri pengumuman lebih jauh atau mengirim dokumenmu ke luar stasiun. ‘Simpan salinannya,’ pesannya. ‘Nanti tetap kita butuhkan.’ Kamu menyatukan kertas lalu kembali ke penelepon. Daya sudah memberi mereka dua pintu keluar, sekaligus menunda salah satu cara mengetahui apa yang terjadi di sini.\n\n‘Saya dekat tangga klinik,’ kata Raka. ‘Langsung lewat gerbang dermaga, atau bantu Mara di pintu servis?’ Kedua jalur terang, tetapi instruksi belum lengkap sampai kamu tahu siapa yang akan mengikutinya. Mara siap melanjutkan bersama pasiennya. Kamu meminta Raka menunggu satu arahan yang jelas, lalu memilih ke mana langkah berikutnya harus menuju."
          }
        },
        {
          "requires": {
            "clinicPowered": true,
            "relayPowered": true
          },
          "text": {
            "en": "The clinic signs come on, and Mara reports the first amber arrow above the service corridor. Beside Iman, the relay screen wakes and the station's outgoing link returns. He can now trace the announcement and transmit beyond the room. You hear him test the connection, then come back to the switches. ‘Clinic and relay are holding,’ he says. ‘The dock is still off.’\n\nRaka tries the gate once more, but it stays locked. ‘Then the clinic stair is my other route.’ You look at the photograph he sent. It leads toward Mara's service door, and the corridor beyond it now has lights. That is a plan you can explain, although it still needs Raka to move carefully and Mara to guide him in when he reaches her side.\n\nMara tells you where her group is waiting. ‘Send him to the door if that's the plan. Don't make him find us by guesswork.’ You can guide Raka toward her through the lit corridor, or ask him to remain at the dock for help that has not answered. The relay gives you a voice outside the station. Your next words still have to get the person inside it moving.",
            "id": "Petunjuk klinik menyala, dan Mara melaporkan panah kuning pertama di atas lorong servis. Di samping Iman, layar relai hidup dan jalur kirim stasiun kembali bekerja. Ia kini bisa melacak pengumuman serta mengirim ke luar ruangan. Kamu mendengar ia menguji sambungan lalu kembali ke sakelar. ‘Klinik dan relai bertahan,’ katanya. ‘Dermaga masih mati.’\n\nRaka mencoba gerbang sekali lagi, tetapi tetap terkunci. ‘Berarti tangga klinik jalur saya yang lain.’ Kamu melihat foto yang ia kirim. Tangga itu mengarah ke pintu servis Mara, dan lorong setelahnya kini terang. Rencananya bisa dijelaskan, meskipun masih membutuhkan Raka bergerak hati-hati serta Mara memandunya masuk ketika ia sampai di sisi klinik.\n\nMara menjelaskan tempat rombongannya menunggu. ‘Kalau itu rencananya, arahkan dia ke pintu. Jangan biarkan dia menebak kami ada di mana.’ Kamu bisa memandu Raka ke Mara melalui lorong terang, atau memintanya tetap di dermaga menunggu bantuan yang belum menjawab. Relai memberimu suara ke luar stasiun. Kata-kata berikutnya tetap harus membantu orang di dalamnya bergerak."
          }
        },
        {
          "requires": {
            "dockPowered": true,
            "relayPowered": true
          },
          "text": {
            "en": "Raka hears the dock gate release, and its beacon shines through the rain. At Iman's cabinet, the relay screen returns to life. He confirms that outgoing transmission and tracing are available again. Then Mara speaks over the sounds of the switches. ‘Our signs are still off. I'm keeping everyone beside me.’ The clinic corridor has stayed dark because you could power only two routes.\n\nYou ask Mara what she can still identify. She knows the service door and the rail, but the water below the group is rising. Raka can use the opened dock exit, or he can try to cross toward her corridor by the stair in his photograph. The picture shows that the places connect; it does not show what the flood has done to the crossing since then.\n\n‘Tell me which way,’ Raka says. Iman holds the chosen circuits while you weigh a lit dock exit against the chance of bringing the callers together. Mara has not asked the courier to take that risk for her. You need to give a usable instruction, including what you cannot confirm, before static turns the conversation into fragments they must assemble for themselves.",
            "id": "Raka mendengar gerbang dermaga terbuka, dan suarnya menembus hujan. Di panel Iman, layar relai kembali hidup. Ia memastikan transmisi keluar dan pelacakan sudah tersedia lagi. Lalu Mara berbicara di sela bunyi sakelar. ‘Petunjuk kami masih mati. Semua saya minta tetap di samping saya.’ Lorong klinik tetap gelap karena hanya dua jalur yang bisa mendapat daya.\n\nKamu bertanya apa yang masih bisa Mara kenali. Ia mengetahui pintu servis dan pagar, tetapi air di bawah rombongannya terus naik. Raka bisa menggunakan pintu dermaga yang terbuka, atau mencoba menyeberang ke lorong Mara melalui tangga dalam fotonya. Gambar itu menunjukkan tempat-tempatnya terhubung, tetapi tidak menunjukkan perubahan akibat banjir sejak foto diambil.\n\n‘Beri tahu saya harus ke mana,’ kata Raka. Iman menjaga sirkuit pilihanmu sementara kamu menimbang jalur dermaga yang terang dan kesempatan mempertemukan para penelepon. Mara belum meminta kurir itu mengambil risiko demi dirinya. Kamu perlu memberi instruksi yang bisa digunakan, termasuk bagian yang belum pasti, sebelum gangguan radio membuat percakapan menjadi potongan yang harus mereka susun sendiri."
          }
        }
      ],
      "choices": [
        {
          "id": "set-plan",
          "label": {
            "en": "Give the final route",
            "id": "Berikan rute terakhir"
          },
          "next": "rescue-plan"
        }
      ],
      "chapter": 1,
      "artKey": "evacuation",
      "artAlt": {
        "en": "High view of three coastal routes under storm, clinic lights, dark relay structure and dock gate contrasted.",
        "id": "Kanal darurat bersama · jalur dikonfirmasi"
      }
    },
    "rescue-plan": {
      "type": "dialogue",
      "location": {
        "en": "Two routes · one instruction",
        "id": "Dua jalur · satu instruksi"
      },
      "speaker": "raka",
      "art": "corridor",
      "text": {
        "en": "‘The stair or the gate?’ Raka asks. ‘I'm ready, but I need to know which one.’ You can hear water moving around him while you look at the photograph. The maintenance stair connects the dock side to Mara's service door. Iman last saw it dry before the rain worsened; that report helps you understand the route, but it cannot tell you how safe every step is now.\n\nMara keeps her patients close and gives the position of the door again. She has not asked Raka to cross for her, and you do not mistake her need for permission to send him without an explanation. At the same time, keeping him at the dock leaves his next move tied to a gate that only works if you powered it. The circuits you chose matter here, as much as the willingness of the callers to follow a shared plan.\n\nYou ask Raka to listen to the whole instruction and repeat it back before moving. He answers with a quiet ‘All right.’ Soon the radio may break up, and there will be no room for a second guess between routes. You choose whether to guide him toward Mara's service door or keep him at the dock exit, then put the direction into words someone frightened and wet can remember.",
        "id": "‘Tangga atau gerbang?’ tanya Raka. ‘Saya siap, tapi harus tahu yang mana.’ Air terdengar bergerak di sekitarnya saat kamu melihat foto. Tangga perawatan menghubungkan sisi dermaga dengan pintu servis Mara. Iman terakhir melihatnya kering sebelum hujan membesar. Laporan itu membantu memahami rute, tetapi tak memastikan setiap pijakannya masih aman sekarang.\n\nMara menjaga pasiennya tetap dekat dan mengulang posisi pintu. Ia belum meminta Raka menyeberang untuknya, dan kebutuhan Mara tak boleh dianggap izin mengirim kurir itu tanpa penjelasan. Sebaliknya, bertahan di dermaga membuat langkah Raka bergantung pada gerbang yang hanya bekerja jika kamu menyalakannya. Sirkuit pilihanmu penting di sini, sama pentingnya dengan kemauan mereka mengikuti rencana bersama.\n\nKamu meminta Raka mendengarkan seluruh instruksi dan mengulanginya sebelum bergerak. Ia menjawab pelan, ‘Baik.’ Sebentar lagi radio mungkin terputus-putus, dan tak akan ada ruang untuk terus berpindah pikiran di antara dua jalur. Kamu memilih antara memandunya menuju pintu servis Mara atau memintanya tetap di pintu keluar dermaga, lalu menyusun arahan yang bisa diingat orang yang sedang basah dan ketakutan."
      },
      "choices": [
        {
          "id": "escort-clinic",
          "label": {
            "en": "Guide Raka to Mara’s service door",
            "id": "Pandu Raka ke pintu servis Mara"
          },
          "next": "final-call",
          "effects": {
            "trust": {
              "mara": 1
            },
            "flags": {
              "escortCourier": true,
              "holdPosition": false
            }
          }
        },
        {
          "id": "exit-dock",
          "label": {
            "en": "Keep Raka at the dock exit",
            "id": "Minta Raka tetap di pintu keluar dermaga"
          },
          "next": "final-call",
          "effects": {
            "trust": {
              "raka": 1
            },
            "flags": {
              "holdPosition": true,
              "escortCourier": false
            }
          }
        }
      ],
      "chapter": 1,
      "artKey": "rescue-plan",
      "artAlt": {
        "en": "A forked service corridor with clinic door and dock exit signs, red strap courier silhouette at the junction.",
        "id": "Dua jalur · satu instruksi"
      }
    },
    "final-call": {
      "type": "dialogue",
      "location": {
        "en": "Dispatch station · the third bell",
        "id": "Stasiun komunikasi · dering ketiga"
      },
      "speaker": "operator",
      "art": "empty",
      "text": {
        "en": "You give the route and hear the callers begin to move. Water splashes near one microphone; footsteps and the hard click of switches come through another. You ask for a reply at each change of position, writing the last confirmed place beside every name. The voices overlap, then drop into static. For a few seconds, all three channels are quiet. None has confirmed a safe arrival yet.\n\nYou call them again, leaving space between the names so an answer can break through. Before one does, the telephone rings on the desk. Its severed cable lies where you found it. You trace the sound to the radio speaker, where the clinic announcement is starting another loop. This time, a second instruction follows it: ‘Operator, remain at your station.’\n\nYou turn toward the senior operator's empty chair. The recording has no answer for the people outside, but it seems to know where you are supposed to be. You set the ringing handset down and keep the live channels open. Whatever is wrong with this room, you will not use its silence to decide that the callers have disappeared. The next messages will tell you who reached the first landing and who is still waiting.",
        "id": "Kamu memberikan rute dan mendengar para penelepon mulai bergerak. Air memercik dekat satu mikrofon; dari yang lain terdengar langkah serta bunyi keras sakelar. Kamu meminta jawaban setiap kali posisi berubah dan menulis tempat terakhir yang terkonfirmasi di samping tiap nama. Suara mereka bertumpuk, lalu tenggelam dalam gangguan. Beberapa detik, ketiga kanal sunyi. Belum ada yang memastikan tiba dengan aman.\n\nKamu memanggil lagi, menyisakan jeda di antara nama agar jawaban bisa masuk. Sebelum ada yang menjawab, telepon di meja berdering. Kabelnya yang terpotong masih tergeletak di tempat tadi. Kamu mengikuti bunyi itu ke pengeras suara radio, tempat pengumuman klinik memulai putaran lain. Kali ini ada instruksi berikutnya: ‘Operator, tetap di stasiun.’\n\nKamu menoleh ke kursi kosong operator senior. Rekaman itu tak punya jawaban untuk orang-orang di luar, tetapi seolah tahu kamu harus berada di mana. Gagang telepon diletakkan kembali, dan kanal langsung tetap dibuka. Apa pun yang salah dengan ruangan ini, kesunyiannya tak akan kamu gunakan untuk menganggap para penelepon lenyap. Pesan berikutnya akan memberi tahu siapa yang mencapai pendaratan pertama dan siapa yang masih menunggu."
      },
      "textVariants": [
        {
          "requires": {
            "escortCourier": true,
            "clinicPowered": true
          },
          "text": {
            "en": "You guide Raka toward the maintenance stair while Mara describes the service door. ‘Two short bars on the sign, one long. That's the door you want.’ The amber arrows are lit, and you ask him to repeat the direction before he moves. He does. Mara calls to her patients, telling them to make room and stay near the rail. You write the door beside Raka's name, but leave his arrival unconfirmed.\n\nHis buckle scrapes against metal. A step lands heavily, then the channel falls quiet. Iman keeps the switches held; the lights do not fail while you call Raka again. There is no answer yet, and no reason to turn that gap into a verdict. You mark the last position you actually heard and keep the microphone ready for a voice from either side of the door.\n\nThe telephone rings on the desk, though its cable is cut. The sound comes through the radio with a line you have not heard before: ‘Operator, remain at your station.’ You turn toward the empty chair, then back to the channels. The first landing reports have not all come in. Whatever the recording wants, your next task is still to find out where the living callers are.",
            "id": "Kamu memandu Raka menuju tangga perawatan sementara Mara menjelaskan pintu servis. ‘Tandanya dua garis pendek, satu panjang. Itu pintu yang kamu cari.’ Panah kuning menyala, dan kamu meminta ia mengulang arah sebelum bergerak. Raka melakukannya. Mara memanggil pasiennya agar memberi ruang dan tetap dekat pagar. Kamu menulis pintu itu di samping nama Raka, tetapi kedatangannya belum dicentang.\n\nGespernya menggesek logam. Satu langkah terdengar berat, lalu kanal menjadi sunyi. Iman tetap menahan sakelar; lampu bertahan saat kamu kembali memanggil Raka. Belum ada jawaban, dan tak ada alasan menjadikan jeda itu sebuah kepastian. Kamu mencatat posisi terakhir yang benar-benar terdengar lalu menunggu suara dari salah satu sisi pintu.\n\nTelepon di meja berdering meskipun kabelnya terpotong. Bunyinya berasal dari radio, bersama kalimat yang belum kamu dengar: ‘Operator, tetap di stasiun.’ Kamu menoleh ke kursi kosong, lalu kembali ke kanal. Laporan dari pendaratan pertama belum semuanya masuk. Apa pun keinginan rekaman itu, tugas berikutnya tetap mencari tahu di mana para penelepon yang masih hidup berada."
          }
        },
        {
          "requires": {
            "holdPosition": true,
            "dockPowered": true
          },
          "text": {
            "en": "You tell Raka to use the dock exit. He checks the powered gate and confirms that it is open before moving. ‘Stay connected, please,’ he says. You keep his channel beside Mara's while she checks the service door with her patients. Iman reads back the circuits and holds the switches. Each person has an instruction now, but an instruction is not the same as an arrival.\n\nYou hear Raka's steps, Mara calling for her group to stay together, and the steady sounds from Iman's cabinet. Then the microphones go quiet. You write their last confirmed positions and call each name again. Nobody has reported a safe landing yet. The gap feels longer than it is, and you resist filling it with either reassurance you cannot support or an ending you have no right to give them.\n\nThe telephone begins to ring on the desk. Its cable is still cut; the ringing comes from the radio, followed by ‘Operator, remain at your station.’ You turn toward the senior operator's empty chair. For the moment, you stay where you can answer the callers. The first landing reports are coming, and you need to read what they confirm rather than what the silence makes you fear.",
            "id": "Kamu meminta Raka memakai pintu keluar dermaga. Ia memeriksa gerbang yang mendapat daya dan memastikan terbuka sebelum bergerak. ‘Tolong tetap tersambung,’ katanya. Kanalnya kamu biarkan berdampingan dengan kanal Mara, yang memeriksa pintu servis bersama pasiennya. Iman mengulang sirkuit yang menyala dan menjaga sakelar. Kini setiap orang punya instruksi, tetapi instruksi belum sama dengan kedatangan.\n\nKamu mendengar langkah Raka, Mara memanggil rombongannya agar tetap bersama, dan bunyi teratur dari panel Iman. Lalu mikrofon mereka sunyi. Kamu menulis posisi terakhir yang sudah pasti dan memanggil nama satu per satu. Belum ada yang melaporkan pendaratan aman. Jeda itu terasa lebih panjang daripada kenyataannya. Kamu menahan diri dari memberi ketenangan yang belum berdasar maupun akhir yang tak berhak kamu tetapkan.\n\nTelepon di meja mulai berdering. Kabelnya masih terpotong; bunyinya datang dari radio, disusul ‘Operator, tetap di stasiun.’ Kamu menoleh ke kursi kosong operator senior. Untuk saat ini, kamu bertahan di tempat yang memungkinkanmu menjawab para penelepon. Laporan pendaratan pertama mulai masuk, dan kamu perlu membaca yang dipastikan oleh laporan, bukan yang ditakutkan dalam kesunyian."
          }
        },
        {
          "requires": {
            "escortCourier": true,
            "clinicPowered": false
          },
          "text": {
            "en": "You guide Raka toward the maintenance stair, but Mara answers from a corridor without lights. ‘The signs are off. Tell him to call out when he reaches the door.’ You pass on the instruction and ask Raka to repeat it. Iman reminds you that the two selected switches are already at the generator's limit. He cannot light the third route without risking the ones still working.\n\nWater knocks beneath the stair while Mara keeps her patients beside the rail. Raka calls once, then his signal breaks. You wait for Mara to confirm he has reached her, but the crossing remains unconfirmed. You note the last position rather than drawing an arrow all the way to safety. What they need next is a working reply; what you have, for now, is an open line.\n\nA ring sounds from the telephone with the severed cable. You find its source in the radio speaker, followed by a new instruction: ‘Operator, remain at your station.’ You turn toward the empty chair, uneasy at the certainty of that voice. The live callers have not given you theirs yet. You leave their channels open while the first landing reports begin to tell you what happened beyond the darkness.",
            "id": "Kamu memandu Raka ke tangga perawatan, tetapi Mara menjawab dari lorong tanpa lampu. ‘Petunjuknya mati. Minta dia memanggil saat sampai di pintu.’ Kamu meneruskan arahan dan meminta Raka mengulanginya. Iman mengingatkan bahwa dua sakelar pilihanmu sudah mencapai batas generator. Jalur ketiga tak bisa dinyalakan tanpa membahayakan dua jalur yang masih bekerja.\n\nAir membentur bagian bawah tangga sementara Mara menjaga pasiennya dekat pagar. Raka memanggil sekali, lalu sinyalnya putus-putus. Kamu menunggu Mara memastikan ia sudah sampai, tetapi penyeberangannya belum terkonfirmasi. Posisi terakhir kamu catat tanpa menarik panah sampai ke tempat aman. Yang mereka butuhkan berikutnya adalah jawaban yang bisa terdengar; untuk sekarang, yang kamu miliki hanya kanal terbuka.\n\nTelepon dengan kabel terpotong berdering. Sumbernya kamu temukan di pengeras suara radio, disusul instruksi baru: ‘Operator, tetap di stasiun.’ Kamu menoleh ke kursi kosong, gelisah mendengar suara yang begitu yakin. Para penelepon langsung belum memberi kepastian mereka. Kanal tetap kamu buka saat laporan pendaratan pertama mulai menjelaskan yang terjadi di balik kegelapan."
          }
        },
        {
          "requires": {
            "holdPosition": true,
            "dockPowered": false
          },
          "text": {
            "en": "You ask Raka to remain at the dock exit, although the unpowered gate is still locked. ‘A little,’ he says. ‘I can wait a little. Not forever.’ You tell him to keep his channel open and report if the water forces him to move. He answers, but the hesitation is clear. The place you have asked him to hold has not yet become a way out.\n\nWater strikes the rail. Iman keeps the two chosen switches in place, unable to add the gate without tripping the generator. Mara checks the service door with her patients. You call for positions and write down the ones you receive, then the microphones fall quiet. No safe exit has been confirmed. Raka's last sentence stays with you while you leave room for him to answer again.\n\nThe cut telephone rings on your desk. Its sound is coming through the radio, where the repeated announcement gains a new line: ‘Operator, remain at your station.’ You turn toward the empty chair. The recording sounds certain about your place while you cannot yet confirm the callers' positions. You keep their channels open and wait for the first landing reports to tell you more.",
            "id": "Kamu meminta Raka tetap di pintu keluar dermaga, meskipun gerbang tanpa daya masih terkunci. ‘Sebentar,’ katanya. ‘Saya bisa menunggu sebentar. Tidak selamanya.’ Kamu meminta kanalnya tetap terbuka dan ia melapor jika air memaksanya berpindah. Ia menjawab, tetapi keraguannya jelas terdengar. Tempat yang kamu minta ia pertahankan belum menjadi jalan keluar.\n\nAir menghantam pagar. Iman menjaga dua sakelar pilihanmu, tak bisa menambah gerbang tanpa menjatuhkan generator. Mara memeriksa pintu servis bersama pasiennya. Kamu meminta posisi dan mencatat jawaban yang masuk, lalu mikrofon mereka menjadi sunyi. Belum ada pintu keluar aman yang terkonfirmasi. Kalimat terakhir Raka terus teringat saat kamu menyisakan ruang agar ia bisa menjawab lagi.\n\nTelepon terputus di mejamu berdering. Bunyinya datang melalui radio, tempat pengumuman berulang mendapat kalimat baru: ‘Operator, tetap di stasiun.’ Kamu menoleh ke kursi kosong. Rekaman itu terdengar yakin tentang tempatmu, sementara posisi para penelepon belum bisa kamu pastikan. Kanal mereka tetap dibuka saat kamu menunggu laporan pendaratan pertama memberi penjelasan berikutnya."
          }
        }
      ],
      "choices": [
        {
          "id": "receive-outcome",
          "label": {
            "en": "Read the final transmissions",
            "id": "Baca transmisi terakhir"
          },
          "next": "ending"
        }
      ],
      "chapter": 1,
      "artKey": "final-call",
      "artAlt": {
        "en": "Severed handset at dark console, three fading channel lights, empty chair deeper in frame.",
        "id": "Stasiun komunikasi · dering ketiga"
      }
    },
    "ending": {
      "type": "dialogue",
      "chapter": 1,
      "speaker": "operator",
      "art": "empty",
      "artKey": "ending",
      "location": {
        "en": "The first safe landing · 01:06",
        "id": "Pendaratan aman pertama · 01.06"
      },
      "text": {
        "en": "At 01:06, the first safe landing sends its report. You match every confirmed arrival to the names on your page, leaving the unanswered entries open for the next crew. Some of the gaps are only a delayed reply; some will need another search. You do not know which is which yet. The radio stays beside your hand while you make the board accurate enough for someone else to use.\n\nThen the ringing returns. By now you know it is coming from the radio, not the telephone with the broken cable. ‘Operator, remain at your station,’ the voice repeats. You have heard enough announcements tonight to know their steady rhythm, but something in the final word catches you. There is a small hesitation, a stumble you remember making before you learned to speak smoothly into a microphone.\n\nIt is your old stammer, the one you heard in the first training takes you recorded after your sister Nila died. You learned to smooth it out later. Now you replay the line, hoping familiarity has made you hear something that is not there. The stumble comes at the same place. Outside, people still need help; inside, a recording is speaking with a piece of your past. You save it and listen for where that voice is coming from.",
        "id": "Pukul 01.06, pendaratan aman pertama mengirim laporan. Kamu mencocokkan setiap orang yang tiba dengan nama di halaman, sambil membiarkan entri yang belum dijawab tetap terbuka untuk regu berikutnya. Sebagian kekosongan mungkin hanya balasan yang terlambat; sebagian membutuhkan pencarian lagi. Kamu belum tahu mana yang mana. Radio tetap dekat tangan saat papan diperbarui agar orang lain bisa menggunakannya dengan tepat.\n\nLalu dering kembali terdengar. Sekarang kamu tahu sumbernya radio, bukan telepon berkabel putus. ‘Operator, tetap di stasiun,’ ulang suara itu. Malam ini kamu sudah cukup sering mendengar pengumuman untuk mengenali iramanya, tetapi sesuatu pada kata terakhir membuatmu berhenti. Ada jeda kecil, tersendat yang dulu kamu alami sebelum belajar bicara lancar di depan mikrofon.\n\nItu gagapmu yang lama, seperti dalam rekaman latihan pertama yang kamu buat setelah adikmu, Nila, meninggal. Belakangan kamu belajar mengatasinya. Kini kamu memutar ulang kalimat itu, berharap rasa akrab membuatmu mendengar sesuatu yang sebenarnya tak ada. Namun tersendatnya muncul di tempat yang sama. Di luar, orang masih membutuhkan bantuan; di dalam, sebuah rekaman berbicara dengan bagian dari masa lalumu. Kamu menyimpannya, lalu mencari dari mana suara itu berasal."
      },
      "choices": [
        {
          "id": "follow-voice",
          "label": {
            "en": "Follow the voice that sounds like yours",
            "id": "Ikuti suara yang terdengar seperti suaramu"
          },
          "next": "storm-hub",
          "effects": {
            "quests": {
              "live-lines": "complete",
              "borrowed-voice": "active"
            },
            "flags": {
              "firstLandingReached": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "Fresh rescue ledger beside live battery radio, grey dawnless harbor beyond window, operator back silhouette.",
        "id": "Pendaratan aman pertama · 01.06"
      },
      "recap": true
    },
    "storm-hub": {
      "type": "hub",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "storm-hub",
      "location": {
        "en": "Dispatch windows · 01:09",
        "id": "Jendela stasiun · 01.09"
      },
      "text": {
        "en": "Rain blurs the apartments across the street, but their windows keep answering one another with torches. You leave the rescue channel open and pull the receiver closer. The repeating voice has moved to 101.7 MHz; following it may explain who sent the clinic order, though it will not answer the people still waiting outside.\n\nBu Sari is trying to restore the market bell, and Lia needs a dry route for a sealed clinic delivery. Other neighbors are calling from windows and roofs. You can hear them out before tracing the carrier. For now, the station has two jobs: find out why its voice lied, and make sure the next person asking for help is heard.",
        "id": "Hujan mengaburkan apartemen di seberang, tetapi jendelanya terus saling menjawab dengan senter. Kamu membiarkan kanal penyelamatan terbuka dan mendekatkan radio. Suara berulang itu pindah ke 101,7 MHz. Melacaknya mungkin menjelaskan siapa yang mengirim perintah klinik, tetapi tidak akan menjawab warga yang masih menunggu di luar.\n\nBu Sari berusaha membunyikan lagi lonceng pasar, sementara Lia membutuhkan jalur kering untuk kiriman klinik yang tersegel. Warga lain memanggil dari jendela dan atap. Kamu bisa mendengarkan mereka sebelum melacak sinyal. Untuk saat ini, stasiun punya dua tugas: mencari tahu mengapa suaranya berbohong dan memastikan orang berikutnya yang meminta bantuan didengar."
      },
      "choices": [
        {
          "id": "help-bell",
          "label": {
            "en": "Bu Sari: “Our bell has gone quiet.”",
            "id": "Bu Sari: “Lonceng kami tak berbunyi.”"
          },
          "next": "bell-call",
          "effects": {
            "quests": {
              "bell": "active"
            }
          },
          "requiresQuest": {
            "bell": "unstarted"
          }
        },
        {
          "id": "help-cargo",
          "label": {
            "en": "Lia: “I need one pair of steady hands.”",
            "id": "Lia: “Saya butuh tangan yang tak gemetar.”"
          },
          "next": "medicine-call",
          "effects": {
            "quests": {
              "medicine": "active"
            }
          },
          "requiresQuest": {
            "medicine": "unstarted"
          }
        },
        {
          "id": "near-window",
          "label": {
            "en": "Listen to the open neighborhood channel",
            "id": "Dengarkan kanal warga yang terbuka"
          },
          "next": "encounter-window",
          "requiresQuest": {
            "enc-window": "unstarted"
          }
        },
        {
          "id": "roof-window",
          "label": {
            "en": "Check a light on the neighboring roof",
            "id": "Periksa cahaya di atap sebelah"
          },
          "next": "encounter-rooftops",
          "requiresQuest": {
            "enc-rooftops": "unstarted"
          }
        },
        {
          "id": "trace-carrier",
          "label": {
            "en": "Trace 101.7 MHz",
            "id": "Lacak 101,7 MHz"
          },
          "next": "second-signal",
          "effects": {
            "quests": {
              "bell": "missed",
              "medicine": "missed"
            }
          }
        }
      ],
      "artAlt": {
        "en": "Rain-streaked dispatch window framing apartment torch signals, penciled flood map on sill.",
        "id": "Jendela stasiun · 01.09"
      }
    },
    "second-signal": {
      "type": "tune",
      "chapter": 2,
      "speaker": "system",
      "art": "empty",
      "artKey": "second-signal",
      "location": {
        "en": "Archive carrier · 101.7 MHz",
        "id": "Sinyal arsip · 101,7 MHz"
      },
      "text": {
        "en": "Tune the archive receiver to 101.7 MHz and capture the repeating voice beneath the rain. This is a separate recording channel; the live callers must stay connected while you listen.",
        "id": "Atur radio arsip ke 101,7 MHz dan simpan suara yang berulang di balik deru hujan. Ini kanal rekaman terpisah; biarkan para penelepon tetap tersambung selama kamu mendengarkan."
      },
      "choices": [
        {
          "id": "hear-self",
          "label": {
            "en": "Listen to the captured voice",
            "id": "Dengarkan suara yang disimpan"
          },
          "next": "wrong-voice"
        }
      ],
      "completeFlag": "archiveSignalLocked",
      "tune": {
        "target": 101.7,
        "clue": "echo-carrier"
      },
      "artAlt": {
        "en": "Macro view of separate archive receiver dial and antenna lead lit cyan, rain droplets on the metal casing.",
        "id": "Sinyal arsip · 101,7 MHz"
      }
    },
    "wrong-voice": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "wrong-voice",
      "location": {
        "en": "Dispatch headphones",
        "id": "Headphone stasiun"
      },
      "text": {
        "en": "The captured voice says, “East clinic cleared,” with the same steady tone that made you sound useful in the training booth. Then you hear the slight catch before “clinic.” You remember having to record that word twenty-seven times, embarrassed that one syllable kept defeating you. Nobody else would know that little failure so well.\n\nYou listen again, hoping recognition will somehow loosen. It does not. These are your sounds, but you never spoke this sentence, never told Mara the rooms were empty, never ordered anyone to close her route. Someone has taken words you offered for practice and joined them into a decision you would have refused to make.\n\nWhen you lift the headphones away, the callers are still there on the live channel. Iman asks what you found. You could tell him now that the broadcast used your voice, or trace its source before saying anything. Either way, you will have to explain the difference between sounding responsible and actually choosing what was done.",
        "id": "Suara dalam rekaman berkata, “Klinik timur kosong,” dengan nada tenang yang membuatmu terdengar berguna di bilik latihan. Lalu kamu mendengar sedikit tersendat sebelum kata “klinik”. Kamu ingat harus merekam kata itu dua puluh tujuh kali, malu karena satu suku kata terus menyulitkanmu. Tak ada orang lain yang mengenali kegagalan kecil itu sebaik dirimu.\n\nKamu mendengarkan sekali lagi, berharap rasa kenal itu akan berkurang. Tidak juga. Bunyi-bunyi ini milikmu, tetapi kamu tak pernah mengucapkan kalimat tersebut, tak pernah memberi tahu Mara bahwa ruangan sudah kosong, atau menyuruh siapa pun menutup jalurnya. Seseorang mengambil kata yang kamu sumbangkan untuk latihan, lalu merangkainya menjadi keputusan yang akan kamu tolak.\n\nSaat headphone kamu lepaskan, para penelepon masih ada di kanal langsung. Iman bertanya apa yang kamu temukan. Kamu bisa mengaku sekarang bahwa siaran itu memakai suaramu, atau melacak sumbernya sebelum bicara. Apa pun pilihanmu, kamu harus menjelaskan perbedaan antara terdengar bertanggung jawab dan benar-benar memutuskan apa yang terjadi."
      },
      "choices": [
        {
          "id": "own-cadence",
          "label": {
            "en": "“That recording is my voice. The order isn’t mine.”",
            "id": "“Rekaman itu suara saya. Perintahnya bukan dari saya.”"
          },
          "next": "archive-room",
          "effects": {
            "flags": {
              "admittedVoice": true
            },
            "trust": {
              "iman": 1
            }
          }
        },
        {
          "id": "trace-first",
          "label": {
            "en": "Trace the source before telling the channel",
            "id": "Lacak sumbernya sebelum memberi tahu kanal"
          },
          "next": "archive-room",
          "effects": {
            "flags": {
              "voiceWithheld": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "Headphones dropped onto tape-splice notes, an empty recording spool turning in amber desk light.",
        "id": "Headphone stasiun"
      }
    },
    "archive-room": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "iman",
      "art": "empty",
      "artKey": "archive-room",
      "location": {
        "en": "Archive corridor · Console C",
        "id": "Lorong arsip · Konsol C"
      },
      "text": {
        "en": "Iman checks the console code against the building plan while you stand outside the archive door. “C means Console C,” he says. “It doesn't mean courier. Raka brought something here; that doesn't make him the person who wrote it.” The explanation is almost ordinary, which makes you realize how quickly suspicion had turned a frightened boy into an answer.\n\nThe latch releases with a tired click. Beyond it, boxes of tapes crowd a narrow desk beneath a lamp. A stopped clock reads 00:18, and for a moment the time seems to accuse you from across the room. Then Iman tells you to leave the mains alone and use the desk light. He can guide you without sending power through the wet corridor.\n\n“I prefer my colleagues without a dramatic entrance,” he adds, giving you just enough time to breathe before returning to work. You step inside carefully. Whatever produced that broadcast left records here: not only a voice to recognize, but paperwork that might tell you whose permission mattered more than the people calling for help.",
        "id": "Iman mencocokkan kode konsol dengan denah gedung sementara kamu berdiri di luar pintu arsip. “C berarti Konsol C,” katanya. “Bukan kurir. Raka mengantar sesuatu ke sini; bukan berarti dia yang menulisnya.” Penjelasannya nyaris biasa saja, dan kamu baru sadar betapa cepat kecurigaan mengubah seorang pemuda ketakutan menjadi jawaban.\n\nKait pintu terlepas dengan klik lemah. Di dalam, kotak kaset berdesakan di meja sempit di bawah lampu. Jam yang berhenti menunjukkan 00.18; sesaat angka itu terasa menuduhmu dari seberang ruangan. Lalu Iman mengingatkan agar kamu tidak menyentuh listrik utama dan cukup memakai lampu meja. Ia bisa memandumu tanpa mengalirkan daya melalui lorong basah.\n\n“Saya lebih suka rekan kerja yang masuk tanpa adegan dramatis,” tambahnya, memberi ruang bagimu untuk bernapas sebelum kembali bekerja. Kamu melangkah dengan hati-hati. Apa pun yang menghasilkan siaran itu meninggalkan catatan di sini: bukan hanya suara untuk dikenali, melainkan dokumen yang mungkin menunjukkan izin siapa yang lebih dipedulikan daripada orang yang meminta bantuan."
      },
      "choices": [
        {
          "id": "read-archive",
          "label": {
            "en": "Read the archive desk",
            "id": "Periksa meja arsip"
          },
          "next": "archive-inspect"
        }
      ],
      "artAlt": {
        "en": "Open metal archive door in long dark corridor, boxed cassette tapes and single lamp visible inside.",
        "id": "Lorong arsip · Konsol C"
      }
    },
    "archive-inspect": {
      "type": "inspect",
      "chapter": 2,
      "speaker": "system",
      "art": "empty",
      "artKey": "archive-inspect",
      "location": {
        "en": "Archive desk",
        "id": "Meja arsip"
      },
      "text": {
        "en": "Inspect the queue ledger, consent form, and splice map on the archive desk. Collect all three to trace the broadcast. The stopped clock belongs to an old training set, not the station's live timekeeping.",
        "id": "Periksa buku antrean, formulir izin, dan peta potongan suara di meja arsip. Kumpulkan ketiganya untuk melacak siaran. Jam berhenti itu properti latihan lama, bukan pencatat waktu aktif stasiun."
      },
      "choices": [
        {
          "id": "join-records",
          "label": {
            "en": "Follow the missing thirteen minutes",
            "id": "Cari tiga belas menit yang hilang"
          },
          "next": "thirteen-minutes"
        }
      ],
      "requiredEvidence": [
        "queue-ledger",
        "consent-form",
        "splice-map"
      ],
      "completeFlag": "archiveDeskReady",
      "hotspots": [
        {
          "id": "ledger",
          "title": {
            "en": "Queue ledger",
            "id": "Buku antrean"
          },
          "x": 20,
          "y": 72,
          "description": {
            "en": "Two times on the same batch.",
            "id": "Dua waktu pada kumpulan pesan yang sama."
          },
          "evidence": "queue-ledger"
        },
        {
          "id": "consent",
          "title": {
            "en": "Consent form",
            "id": "Formulir izin"
          },
          "x": 50,
          "y": 65,
          "description": {
            "en": "Your signature. A narrow permission.",
            "id": "Tanda tanganmu. Izin yang terbatas."
          },
          "evidence": "consent-form"
        },
        {
          "id": "splices",
          "title": {
            "en": "Splice map",
            "id": "Peta potongan"
          },
          "x": 78,
          "y": 73,
          "description": {
            "en": "Words connected by penciled arrows.",
            "id": "Kata dihubungkan panah pensil."
          },
          "evidence": "splice-map"
        },
        {
          "id": "clock",
          "title": {
            "en": "Stopped clock",
            "id": "Jam berhenti"
          },
          "x": 82,
          "y": 25,
          "description": {
            "en": "A training prop, not evidence that time stopped.",
            "id": "Properti latihan, bukan bukti waktu berhenti."
          },
          "evidence": null
        }
      ],
      "artAlt": {
        "en": "Overhead archive desk with cassette splice map, signed consent page, queue ledger and old stopped prop clock.",
        "id": "Meja arsip"
      }
    },
    "thirteen-minutes": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "iman",
      "art": "empty",
      "artKey": "thirteen-minutes",
      "location": {
        "en": "Archive ledger · batch C-18",
        "id": "Buku arsip · kumpulan C-18"
      },
      "text": {
        "en": "You lay the queue ledger beside the captured broadcast, and Iman talks you through what its two times mean. “Nothing happened to the clock,” he says. “The requests are what disappeared.” The clip entered the queue at 00:31, but the system reused a batch header marked 00:18. A failed clinic transfer was tucked beneath an earlier record instead of remaining visible as unfinished work.\n\nMara's patients had not vanished, and the water in her stairwell had not waited. The queue simply stopped presenting their calls as something that needed answering. You follow the entries with your finger, thinking of the time you spent trying to make a recorded announcement agree with a woman who was standing in the very rooms it called empty.\n\n“The ledger tells us what the reset did,” Iman says. “We still need to connect it to the authorization.” He is keeping you from turning a discovery into a claim you cannot yet support. You set the consent form beside the timestamps. Before you establish who approved the concealment, you need to understand what anyone was entitled to do with your voice.",
        "id": "Kamu meletakkan buku antrean di samping rekaman siaran, lalu Iman menjelaskan arti dua waktu di dalamnya. “Jamnya tidak mengalami apa-apa,” katanya. “Yang hilang itu permintaan bantuan.” Rekaman masuk antrean pukul 00.31, tetapi sistem memakai kembali waktu kumpulan pesan bertanda 00.18. Transfer klinik yang gagal terselip di bawah catatan lama, bukan tetap terlihat sebagai pekerjaan yang belum selesai.\n\nPasien-pasien Mara tidak menghilang, dan air di tangganya tidak menunggu. Antrean itu hanya berhenti menampilkan panggilan mereka sebagai sesuatu yang perlu dijawab. Kamu menelusuri catatan dengan jari, mengingat waktu yang terbuang untuk menyelaraskan pengumuman rekaman dengan seorang perempuan yang berdiri di ruangan yang disebut sudah kosong.\n\n“Buku ini menjelaskan akibat perubahan waktunya,” kata Iman. “Kita masih harus menghubungkannya dengan izin.” Ia menjagamu agar temuan tidak berubah menjadi klaim yang belum bisa dibuktikan. Kamu menaruh formulir persetujuan di samping catatan waktu. Sebelum memastikan siapa yang menyetujui penyembunyian itu, kamu perlu memahami sejauh mana orang boleh memakai suaramu."
      },
      "choices": [
        {
          "id": "open-consent",
          "label": {
            "en": "Read what you agreed to",
            "id": "Baca izin yang pernah kamu berikan"
          },
          "next": "consent-file"
        }
      ],
      "artAlt": {
        "en": "Close view of two printer timestamp strips across water-stained batch ledger, shadow of moving rain.",
        "id": "Buku arsip · kumpulan C-18"
      }
    },
    "consent-file": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "consent-file",
      "location": {
        "en": "Training booth · last winter",
        "id": "Bilik latihan · musim lalu"
      },
      "text": {
        "en": "Your signature is easy to recognize, though the room where you wrote it feels far away. TRAINING ONLY appears above the permissions, followed by a separate requirement for any live use. You remember the booth's foam walls, the tea going lukewarm, and someone telling you that your voice made emergency instructions sound less frightening. You had been glad to offer something useful.\n\nAfter Nila died in the ferry accident, ordinary conversations became difficult in ways you could not explain. Reading from a script was easier. The safety archive asked you to supply words for practice, and you could do that: speak clearly, pause in the right places, give strangers a calm you did not have for yourself. You signed for that work, and no more.\n\nThere is no later request for live dispatch permission. You turn the page anyway, as if a missing signature might release you from having to say it aloud. It does not. Someone kept the useful part of your agreement and discarded its limit. The original recordings may show exactly how your training voice became tonight's authority.",
        "id": "Tanda tanganmu mudah dikenali, meski ruangan tempat kamu menulisnya terasa jauh. KHUSUS LATIHAN tercetak di atas rincian izin, disusul syarat persetujuan terpisah untuk pemakaian langsung. Kamu ingat dinding kedap bilik itu, teh yang mulai suam, dan seseorang berkata bahwa suaramu membuat petunjuk darurat terdengar tidak terlalu menakutkan. Kamu senang bisa menyumbangkan sesuatu yang berguna.\n\nSesudah Nila meninggal dalam kecelakaan feri, percakapan biasa menjadi sulit dengan cara yang tak bisa kamu jelaskan. Membaca naskah lebih mudah. Arsip keselamatan meminta kata-kata untuk latihan, dan itu sanggup kamu lakukan: bicara jelas, berhenti di tempat yang tepat, memberi orang asing ketenangan yang tak kamu miliki sendiri. Kamu menandatangani izin untuk pekerjaan itu, tidak lebih.\n\nTidak ada permintaan berikutnya untuk izin siaran langsung. Kamu tetap membalik halaman, seolah tanda tangan yang hilang bisa membebaskanmu dari keharusan mengatakannya lantang. Tidak juga. Seseorang mempertahankan bagian persetujuanmu yang berguna dan membuang batasnya. Rekaman asli mungkin menunjukkan bagaimana suara latihanmu berubah menjadi kewenangan malam ini."
      },
      "choices": [
        {
          "id": "hear-original",
          "label": {
            "en": "Play one original take",
            "id": "Putar satu rekaman asli"
          },
          "next": "recording-phrase"
        }
      ],
      "artAlt": {
        "en": "Old training booth viewed through glass, operator seated from rear before foam wall and microphone, untouched tea.",
        "id": "Bilik latihan · musim lalu"
      }
    },
    "recording-phrase": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "recording-phrase",
      "location": {
        "en": "Original take · file 27",
        "id": "Rekaman asli · berkas 27"
      },
      "text": {
        "en": "You play file twenty-seven. “Remain at your station,” your recorded self says, before stumbling out of the solemn tone with a laugh. “Sorry. I sound like a kettle trying to be a captain.” You remember being allowed another take. Hearing that small, unguarded moment is almost a relief; the person in the booth was still allowed to get a sentence wrong.\n\nThe splice map shows what happened afterward. ECHO selected words from those takes and joined them into announcements. It kept the reassuring cadence and left behind the laugh, the hesitation, and any opportunity for you to refuse an order. Salim was the operator who answered the emergency broadcast tonight. His empty chair no longer looks like evidence that no one questioned it.\n\nBeneath ECHO's label, a live-use approval bears Arga's initials. That authorization belongs to the station; it is not the separate consent the form required from you. You gather the recording and the page together. The callers deserve to hear how the order was assembled before another borrowed sentence tells them where it is safe to go.",
        "id": "Kamu memutar berkas dua puluh tujuh. “Tetap di stasiun,” kata dirimu dalam rekaman, lalu nada khidmat itu buyar oleh tawa. “Maaf. Saya terdengar seperti teko yang ingin jadi kapten.” Kamu ingat masih diberi kesempatan mengulang. Mendengar momen kecil tanpa pertahanan itu hampir melegakan; orang dalam bilik tersebut masih boleh salah mengucapkan kalimat.\n\nPeta potongan suara menunjukkan yang terjadi sesudahnya. ECHO memilih kata dari rekaman-rekaman itu lalu menyambungnya menjadi pengumuman. Nada menenangkan dipertahankan, sementara tawa, keraguan, dan kesempatanmu menolak perintah disingkirkan. Salim adalah operator yang menjawab siaran darurat malam ini. Kursinya yang kosong tak lagi terasa sebagai bukti bahwa tidak ada yang mempertanyakan siaran tersebut.\n\nDi bawah label ECHO, persetujuan pemakaian langsung memuat paraf Arga. Izin itu berasal dari stasiun; bukan persetujuan terpisah darimu yang disyaratkan formulir. Kamu mengumpulkan rekaman dan halaman itu. Para penelepon berhak tahu bagaimana perintah dirakit, sebelum kalimat pinjaman lain menentukan tempat yang disebut aman bagi mereka."
      },
      "choices": [
        {
          "id": "tell-channel",
          "label": {
            "en": "Tell the callers what ECHO did",
            "id": "Jelaskan perbuatan ECHO kepada penelepon"
          },
          "next": "borrowed-breath",
          "effects": {
            "flags": {
              "admittedVoice": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "Original tape reel beside tiny label file27 and unused training microphone, discarded paper cup.",
        "id": "Rekaman asli · berkas 27"
      }
    },
    "borrowed-breath": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "lia",
      "art": "empty",
      "artKey": "borrowed-breath",
      "location": {
        "en": "Open emergency channel",
        "id": "Kanal darurat terbuka"
      },
      "text": {
        "en": "You tell the open channel what you found, carefully enough that the explanation cannot sound like another announcement. The words came from your training recordings. ECHO assembled them; you did not send the clinic order. For a few seconds you hear only the shelter behind Lia: someone coughing, somebody asking for a dry sock, the ordinary needs the broadcast had almost talked you out of believing.\n\n“So the voice is assembled,” Lia says. “The people aren't.” She lets that settle before continuing. “I believe you didn't choose those words. But I need to know who's answering me now. When you aren't certain, say so. When the route changes, tell us why.” Her precision is kinder than a quick assurance that everything will be fine.\n\nYou give your name, without adding the station's title. It feels exposed, and then simply useful: a person she can call back, a person who can be held to a promise. Lia repeats it to make sure she heard correctly. As you answer, the private line begins ringing. The person who approved ECHO has something he wants to say.",
        "id": "Kamu menjelaskan temuanmu di kanal terbuka dengan hati-hati agar penjelasan itu tidak terdengar seperti pengumuman lain. Kata-katanya berasal dari rekaman latihanmu. ECHO yang merangkainya; kamu tidak mengirim perintah klinik. Beberapa detik hanya terdengar kesibukan posko di belakang Lia: orang batuk, orang meminta kaus kaki kering, kebutuhan biasa yang hampir kamu ragukan karena siaran tadi.\n\n“Berarti suaranya dirakit,” kata Lia. “Orangnya tidak.” Ia memberi waktu agar kamu memahami itu sebelum melanjutkan. “Saya percaya kamu tidak memilih kata-kata tersebut. Tapi saya perlu tahu siapa yang menjawab sekarang. Kalau belum yakin, bilang. Kalau rutenya berubah, jelaskan sebabnya.” Ketepatannya lebih menenangkan daripada janji cepat bahwa semua akan baik-baik saja.\n\nKamu menyebut namamu tanpa menambahkan jabatan stasiun. Rasanya terbuka, lalu sekadar berguna: seseorang yang bisa ia hubungi kembali, seseorang yang bisa diminta menepati janji. Lia mengulang namamu untuk memastikan ia mendengar dengan benar. Saat kamu menjawab, jalur pribadi mulai berdering. Orang yang mengizinkan ECHO ingin menyampaikan sesuatu."
      },
      "choices": [
        {
          "id": "answer-director",
          "label": {
            "en": "Answer the private line",
            "id": "Jawab jalur pribadi"
          },
          "next": "director-call"
        }
      ],
      "artAlt": {
        "en": "Battery radio and red recording lamp on an open shelter window, many backs and fully wrapped rain hoods outside.",
        "id": "Kanal darurat terbuka"
      }
    },
    "director-call": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "arga",
      "art": "empty",
      "artKey": "director-call",
      "location": {
        "en": "Director’s private line · 01:31",
        "id": "Jalur pribadi direktur · 01.31"
      },
      "text": {
        "en": "Arga speaks as though this is a meeting running slightly behind schedule. “Your voice prevented panic,” he says. Ice shifts in a glass somewhere beside his phone. You are standing in a wet corridor with paper under your coat, and the small, comfortable sound makes his distance from the callers suddenly measurable. He asks you to stop using the word stolen.\n\n“The dock was carrying priority transfers. Officials, evacuees, people we needed to move before the crowd blocked the lane. ECHO followed an approved routing rule.” He pauses, then adds, “An untidy queue is a problem. A frightened crowd with contradictory orders is a disaster.” In his account, certainty is something the station provides even when the facts cannot support it.\n\n“I want you to send the archive to me,” he says. “Let the people with training handle the explanation. We can correct the record once the city is safe.” You keep a hand on the live receiver. The clinic had already been called empty while people were still inside it. Before you hand anything over, you need an answer about who made that decision and who agreed to hide its failure.",
        "id": "Arga bicara seolah ini rapat yang sedikit terlambat. “Suaramu mencegah kepanikan,” katanya. Es bergeser dalam gelas di dekat teleponnya. Kamu berdiri di lorong basah dengan dokumen di balik mantel, dan bunyi kecil yang nyaman itu membuat jaraknya dari para penelepon terasa nyata. Ia meminta kamu berhenti memakai kata dicuri.\n\n“Dermaga membawa transfer prioritas. Pejabat, pengungsi, orang-orang yang perlu dipindahkan sebelum kerumunan menutup jalur. ECHO mengikuti aturan rute yang sudah disetujui.” Ia berhenti sebentar, lalu menambahkan, “Antrean berantakan memang masalah. Kerumunan ketakutan dengan perintah bertentangan adalah bencana.” Dalam penjelasannya, stasiun harus menyediakan kepastian bahkan saat kenyataan tidak mendukungnya.\n\n“Kirim arsipnya,” katanya. “Biar orang yang terlatih mengurus penjelasan. Catatan bisa kita perbaiki setelah kota aman.” Kamu tetap memegang radio langsung. Klinik sudah disebut kosong sementara orang masih berada di dalamnya. Sebelum menyerahkan apa pun, kamu membutuhkan jawaban tentang siapa yang membuat keputusan itu dan siapa yang menyetujui penyembunyian kegagalannya."
      },
      "choices": [
        {
          "id": "challenge-order",
          "label": {
            "en": "“Who called the clinic empty?”",
            "id": "“Siapa yang menyebut klinik itu kosong?”"
          },
          "next": "culpability",
          "effects": {
            "flags": {
              "challengedArga": true
            }
          }
        },
        {
          "id": "keep-copy",
          "label": {
            "en": "Keep the line open and copy his authorization",
            "id": "Biarkan tersambung dan salin izinnya"
          },
          "next": "culpability",
          "effects": {
            "flags": {
              "recordedArga": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "Dry private office curtain, anonymous cuffed hand beside glass and desktop private-line phone, no head or portrait.",
        "id": "Jalur pribadi direktur · 01.31"
      }
    },
    "culpability": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "culpability",
      "location": {
        "en": "A signature under the rule",
        "id": "Tanda tangan di bawah aturan"
      },
      "text": {
        "en": "“I gave approval for a routing rule,” Arga says at last. “I didn't approve every sentence the system produced.” You understand the distinction he wants you to accept. ECHO assembled the wording, and a machine can make a false statement. But the page in front of you is signed by a person. It authorizes dock priority, then permits unresolved transfers to disappear beneath a reset batch header.\n\nThe dock list includes officials and ordinary evacuees; no one there becomes less deserving because Arga used them to defend his decision. The clinic list is where the contradiction remains. Its patients were marked transferred before a completed handoff could account for them. You keep both pages in view, refusing the easier story in which one group has to become the enemy of the other.\n\nArga asks again for the archive. You save the signed order instead. It will need to be checked against the queue ledger, but his authorization cannot be dismissed as something ECHO invented. Your voice carried the false instruction into the stairwell; his rule made it possible, and his approval helped conceal what went wrong. Meanwhile, the rescue channel is still waiting for an answer.",
        "id": "“Saya mengizinkan aturan rute,” akhirnya Arga berkata. “Saya tidak menyetujui setiap kalimat yang dihasilkan sistem.” Kamu memahami perbedaan yang ingin ia terima sebagai alasan. ECHO memang merangkai kata-katanya, dan mesin bisa membuat pernyataan keliru. Namun halaman di depanmu ditandatangani manusia. Isinya mengizinkan prioritas dermaga, lalu membolehkan transfer yang belum selesai disembunyikan di bawah waktu kumpulan pesan yang diatur ulang.\n\nDaftar dermaga memuat pejabat dan pengungsi biasa; tak seorang pun di sana kehilangan hak untuk diselamatkan karena Arga memakai mereka untuk membela keputusannya. Pertentangannya ada pada daftar klinik. Pasien ditandai sudah dipindahkan sebelum serah terima yang selesai bisa memastikan keberadaan mereka. Kamu tetap melihat kedua halaman, menolak cerita mudah yang menjadikan satu kelompok musuh bagi kelompok lain.\n\nArga kembali meminta arsip. Kamu justru menyimpan perintah bertanda tangan itu. Dokumen masih perlu dicocokkan dengan buku antrean, tetapi izinnya tidak bisa dianggap ciptaan ECHO. Suaramu membawa instruksi keliru ke tangga klinik; aturannya memungkinkan itu, dan persetujuannya membantu menyembunyikan kegagalan. Sementara itu, kanal penyelamatan masih menunggu jawaban."
      },
      "choices": [
        {
          "id": "save-authorization",
          "label": {
            "en": "Save the signed order; keep the rescue channel open",
            "id": "Simpan perintah; jaga kanal penyelamatan"
          },
          "next": "channel-hub",
          "effects": {
            "evidence": [
              "director-order"
            ],
            "flags": {
              "humanAuthorizationFound": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "Signed routing page under a tense operator hand, contrasting wet coat sleeve and spotless director document.",
        "id": "Tanda tangan di bawah aturan"
      }
    },
    "channel-hub": {
      "type": "hub",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "channel-hub",
      "location": {
        "en": "Service channel · 01:39",
        "id": "Kanal servis · 01.39"
      },
      "text": {
        "en": "The service stair leads toward the inland road, but the console still treats its latch as part of a closed route. Before you follow that record, you check the messages arriving on the maintenance channel. One is from Salim, the senior operator whose empty chair greeted you. Others come from workers and drivers who are still finding ways around the flood.\n\nThere is also an old private file marked NILA. Seeing your sister's name beside the live calls hurts, though the date makes clear that this is a saved message. You can open it, look for Salim, or answer the local updates before returning to the stair. The order in the archive explains part of tonight; the people on these lines can tell you what the paperwork has left out.",
        "id": "Tangga servis mengarah ke jalan daratan, tetapi konsol masih memasukkan kaitnya ke rute yang tertutup. Sebelum menelusuri catatan itu, kamu memeriksa pesan yang masuk melalui kanal perawatan. Satu berasal dari Salim, operator senior yang kursi kosongnya menyambutmu tadi. Pesan lain datang dari pekerja dan sopir yang masih mencari jalan melewati banjir.\n\nAda pula berkas pribadi lama bertanda NILA. Melihat nama adikmu di samping panggilan langsung terasa menyakitkan, meski tanggalnya jelas menunjukkan pesan simpanan. Kamu bisa membukanya, mencari Salim, atau menjawab kabar sekitar sebelum kembali mengurus tangga. Perintah dalam arsip menjelaskan sebagian malam ini; orang-orang di kanal dapat menceritakan yang tertinggal dari dokumen."
      },
      "choices": [
        {
          "id": "find-salim",
          "label": {
            "en": "Find the operator who left the empty chair",
            "id": "Cari operator yang meninggalkan kursi kosong"
          },
          "next": "witness-call",
          "effects": {
            "quests": {
              "witness": "active"
            }
          },
          "requiresQuest": {
            "witness": "unstarted"
          }
        },
        {
          "id": "hear-nila",
          "label": {
            "en": "Open the private message marked NILA",
            "id": "Buka pesan pribadi bertanda NILA"
          },
          "next": "letter-open",
          "effects": {
            "quests": {
              "letter": "active"
            }
          },
          "requiresQuest": {
            "letter": "unstarted"
          }
        },
        {
          "id": "tunnel-call",
          "label": {
            "en": "Answer a knock on the maintenance channel",
            "id": "Jawab ketukan di kanal perawatan"
          },
          "next": "encounter-tunnel",
          "requiresQuest": {
            "enc-tunnel": "unstarted"
          }
        },
        {
          "id": "cargo-call",
          "label": {
            "en": "Check an unsigned delivery update",
            "id": "Periksa kabar kiriman tanpa tanda tangan"
          },
          "next": "encounter-cargo",
          "requiresQuest": {
            "enc-cargo": "unstarted"
          }
        },
        {
          "id": "follow-stair",
          "label": {
            "en": "Follow the service stair record",
            "id": "Ikuti catatan tangga servis"
          },
          "next": "service-tunnel",
          "effects": {
            "quests": {
              "letter": "missed",
              "witness": "missed"
            }
          }
        }
      ],
      "artAlt": {
        "en": "Rain beads on station glass, handdrawn service network map and two small incoming-message slips on sill.",
        "id": "Kanal servis · 01.39"
      }
    },
    "service-tunnel": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "iman",
      "art": "empty",
      "artKey": "service-tunnel",
      "location": {
        "en": "Lower service tunnel",
        "id": "Terowongan servis bawah"
      },
      "text": {
        "en": "Iman studies the stair record while you wait at the lower service tunnel. “The latch can be opened manually,” he says. “The console calls it closed because there's no open request in the queue. That's a record of what someone entered, not a report from the door.” After the false clinic announcement, you know how dangerous it is to confuse those two things.\n\nHe traces a route around the flooded clinic, up through the tower, and onto the inland road. The line is rough, interrupted where his wet glove slips, but he explains each turn until you can follow it without guessing. You repeat the route back to him. This time a reassuring voice is not enough; both of you need to know that the same path is being described.\n\n“A path can exist before the form agrees,” he says, leaving a muddy mark beside the arrow. You keep the route for the rescue and return to the documents. The signed order and queue ledger belong on the same board. Connecting them will let you distinguish the decision Arga admitted from the full sequence he still wants you to leave in his care.",
        "id": "Iman mempelajari catatan tangga sementara kamu menunggu di terowongan servis bawah. “Kaitnya bisa dibuka manual,” katanya. “Konsol menyebutnya tertutup karena permintaan buka tidak ada dalam antrean. Itu catatan yang dimasukkan orang, bukan laporan dari pintunya.” Sesudah pengumuman klinik yang keliru, kamu tahu betapa berbahayanya menyamakan kedua hal itu.\n\nIa menggambar jalur memutari klinik yang tergenang, naik melalui menara, lalu menuju jalan daratan. Garisnya kasar dan terputus saat sarung tangan basahnya bergeser, tetapi ia menjelaskan setiap belokan sampai kamu bisa mengikutinya tanpa menebak. Kamu mengulang rute tersebut kepadanya. Kali ini suara menenangkan saja tidak cukup; kalian harus memastikan sedang membicarakan jalan yang sama.\n\n“Jalan bisa ada sebelum formulirnya setuju,” katanya, meninggalkan cap lumpur di samping panah. Kamu menyimpan rute untuk penyelamatan lalu kembali ke dokumen. Perintah bertanda tangan dan buku antrean perlu diletakkan di papan yang sama. Mencocokkannya akan memisahkan keputusan yang diakui Arga dari urutan lengkap yang masih ingin ia kendalikan."
      },
      "choices": [
        {
          "id": "test-authorization",
          "label": {
            "en": "Compare the ledger with Arga’s signed order",
            "id": "Bandingkan buku antrean dan perintah Arga"
          },
          "next": "echo-check"
        }
      ],
      "artAlt": {
        "en": "Underground service stair bending uphill, muddy yellow glove pointing to a handdrawn arrow on wall.",
        "id": "Terowongan servis bawah"
      }
    },
    "echo-check": {
      "type": "evidence",
      "chapter": 2,
      "speaker": "system",
      "art": "empty",
      "artKey": "echo-check",
      "location": {
        "en": "Authorization board",
        "id": "Papan izin"
      },
      "text": {
        "en": "Select the queue ledger and Arga's signed priority order, then compare them. The ledger records the hidden requests; the order identifies who authorized the rule and header reset.",
        "id": "Pilih buku antrean dan perintah prioritas bertanda tangan Arga, lalu bandingkan. Buku mencatat permintaan yang disembunyikan; perintah menunjukkan pemberi izin aturan dan perubahan waktunya."
      },
      "choices": [
        {
          "id": "read-accountability",
          "label": {
            "en": "Read the verified sequence",
            "id": "Baca urutan yang terbukti"
          },
          "next": "queue-proof",
          "requires": {
            "archiveVerified": true
          }
        },
        {
          "id": "defer-check",
          "label": {
            "en": "Leave the comparison open; continue the rescue",
            "id": "Tunda perbandingan; lanjutkan penyelamatan"
          },
          "next": "queue-proof",
          "requires": {
            "archiveVerified": false
          }
        }
      ],
      "compare": {
        "pair": [
          "queue-ledger",
          "director-order"
        ],
        "reward": "archive-proof",
        "flag": "archiveVerified",
        "options": [
          "queue-ledger",
          "consent-form",
          "splice-map",
          "director-order"
        ],
        "success": {
          "en": "The ledger matches Arga’s approval. The reset hid a failed clinic handoff.",
          "id": "Buku antrean cocok dengan izin Arga. Waktu diubah untuk menutupi transfer klinik gagal."
        }
      },
      "evidence": {
        "pair": [
          "queue-ledger",
          "director-order"
        ],
        "reward": "archive-proof"
      },
      "artAlt": {
        "en": "Authorization evidence board with two signed documents, ledger page and thin connective pencil lines.",
        "id": "Papan izin"
      }
    },
    "queue-proof": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "queue-proof",
      "location": {
        "en": "The order behind the order",
        "id": "Perintah di balik perintah"
      },
      "text": {
        "en": "You put the ledger and signed order in the same folder, but leave space between them in your account. Their comparison is unfinished. The thirteen-minute reset is a serious lead, and Arga has admitted approving dock priority; neither fact gives you permission to present every part of the sequence as independently checked. People have already been harmed by a voice sounding more certain than it should.\n\nWhat you can say is clear enough. ECHO used recordings supplied for training, without the separate permission required for live dispatch. The clinic was not empty when the broadcast said it was. The documents suggest how those requests were concealed, but another reader still needs to test the links you have not verified. You write down both the findings and their limits.\n\nIman asks whether you are ready to move. “Ready to keep the rescue going,” you answer, closing the folder marked UNFINISHED. You do not like leaving the work open, but the water is rising while you hesitate. The record can travel with you. It does not have to become a finished explanation before you respond to the next warning.",
        "id": "Kamu menaruh buku antrean dan perintah bertanda tangan dalam map yang sama, tetapi tidak langsung menyambungkannya dalam penjelasan. Perbandingannya belum selesai. Perubahan tiga belas menit merupakan petunjuk serius, dan Arga mengakui izin prioritas dermaga; keduanya belum membolehkanmu menyebut setiap bagian urutan sudah diperiksa. Orang telanjur dirugikan oleh suara yang terdengar lebih yakin daripada seharusnya.\n\nHal yang bisa kamu sampaikan sudah cukup jelas. ECHO memakai rekaman latihan tanpa izin terpisah yang diperlukan untuk siaran langsung. Klinik belum kosong saat siaran mengatakan sebaliknya. Dokumen menunjukkan kemungkinan cara permintaan disembunyikan, tetapi orang lain masih perlu memeriksa kaitan yang belum kamu uji. Kamu mencatat temuan beserta batasnya.\n\nIman bertanya apakah kamu siap bergerak. “Siap melanjutkan penyelamatan,” jawabmu, menutup map bertanda BELUM TUNTAS. Kamu tidak suka meninggalkan pekerjaan terbuka, tetapi air terus naik selama kamu ragu. Catatan bisa dibawa bersamamu. Catatan itu tidak harus menjadi penjelasan yang selesai sebelum kamu menjawab peringatan berikutnya."
      },
      "choices": [
        {
          "id": "listen-tide",
          "label": {
            "en": "Check the rising-water report",
            "id": "Periksa laporan air yang naik"
          },
          "next": "tide-warning"
        }
      ],
      "artAlt": {
        "en": "Torn batch header beside signed consent, neatly arranged sequence of timestamp receipts, desk dawn-blue shadows.",
        "id": "Perintah di balik perintah"
      },
      "textVariants": [
        {
          "requires": {
            "archiveVerified": true
          },
          "text": {
            "en": "With the ledger beside the signed order, the sequence finally holds together. At 00:18 Arga approved dock priority. At 00:31 ECHO assembled the announcement from your recordings. The clinic transfer failed, and an authorized reset reused the earlier batch header, hiding thirteen minutes of unresolved requests. You read the times twice, checking that the explanation follows the documents rather than your anger.\n\nThe city did not lose thirteen minutes of time. People lost thirteen minutes in which their calls should have remained visible. Mara was still in the clinic, trying to move patients through water, while the station's queue made that work appear complete. The difference is simple enough to say now, and unbearable in a way the neat entries could never express.\n\nYou save the checked sequence beside your consent form. One page records what you agreed to provide; another shows what Arga authorized without asking you. The distinction matters, but it does not make tonight solely about your stolen voice. You have a record that can explain why people were overlooked. Now you have to carry it somewhere they can still be helped.",
            "id": "Saat buku antrean disandingkan dengan perintah bertanda tangan, urutannya akhirnya tersambung. Pukul 00.18 Arga menyetujui prioritas dermaga. Pukul 00.31 ECHO merangkai pengumuman dari rekamanmu. Transfer klinik gagal, lalu perubahan yang diizinkan memakai kembali waktu kumpulan pesan lama dan menyembunyikan tiga belas menit permintaan belum tuntas. Kamu membaca waktunya dua kali agar penjelasan mengikuti dokumen, bukan kemarahanmu.\n\nKota tidak kehilangan tiga belas menit waktu. Orang kehilangan tiga belas menit ketika panggilan mereka seharusnya tetap terlihat. Mara masih di klinik, berusaha membawa pasien melewati air, sementara antrean stasiun membuat pekerjaan itu tampak selesai. Perbedaannya kini mudah dijelaskan, sekaligus menyakitkan dengan cara yang tidak bisa ditunjukkan oleh baris-baris rapi itu.\n\nKamu menyimpan urutan yang telah diperiksa di samping formulir persetujuan. Satu halaman mencatat sumbangan yang kamu izinkan; halaman lain menunjukkan keputusan Arga tanpa meminta izinmu. Perbedaannya penting, tetapi malam ini bukan semata tentang suaramu yang dicuri. Kamu punya catatan yang menjelaskan mengapa orang diabaikan. Sekarang catatan itu harus dibawa ke tempat mereka masih bisa ditolong."
          }
        }
      ]
    },
    "tide-warning": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "lia",
      "art": "empty",
      "artKey": "tide-warning",
      "location": {
        "en": "Hill shelter weather link · 01:54",
        "id": "Kanal cuaca posko bukit · 01.54"
      },
      "text": {
        "en": "Lia calls before you can put the folder away. “Surge at 02:10,” she says, reading the weather report without softening its meaning. “The lower bridge closes first. Anyone still coming from the clinic or dock needs the tower stair and the inland road.” You mark the time beside the route. It is a deadline you can act on, not a reassurance somebody has supplied for you.\n\nA voice behind her asks whether a cat belongs on the shelter's headcount. Lia answers without leaving your line: “Everybody with a heartbeat. Tell me how many people too.” The question sounds small against the forecast, but you hear why she answers it. Somebody needs to know that reaching safety will not require them to leave a member of their household unmentioned.\n\nLia comes back to you. “Give me a route I can repeat to the next crew. If something isn't checked, mark it.” You send what Iman has traced, with the tower stair clearly named. There is still work between a line on the map and a safe crossing. Before you leave the station, you also need to decide how the archive can travel without making the callers' private lives another thing they lose tonight.",
        "id": "Lia memanggil sebelum map sempat kamu simpan. “Gelombang datang pukul 02.10,” katanya, membacakan laporan cuaca tanpa melunakkan artinya. “Jembatan bawah akan tertutup duluan. Orang yang masih datang dari klinik atau dermaga perlu tangga menara dan jalan daratan.” Kamu menandai waktu di samping rute. Ini tenggat yang bisa ditindaklanjuti, bukan ketenangan yang disediakan seseorang untukmu.\n\nSuara di belakangnya bertanya apakah kucing termasuk hitungan posko. Lia menjawab tanpa memutus kanalmu: “Semua yang punya detak jantung. Jumlah orangnya juga beri tahu saya.” Pertanyaan itu terasa kecil dibanding ramalan cuaca, tetapi kamu memahami alasan ia menjawab. Seseorang perlu tahu bahwa mencapai tempat aman tidak mengharuskannya membiarkan anggota keluarganya tanpa disebut.\n\nLia kembali kepadamu. “Beri rute yang bisa saya ulang kepada petugas berikutnya. Kalau belum diperiksa, tandai.” Kamu mengirim jalur yang digambar Iman dengan tangga menara disebut jelas. Masih ada pekerjaan antara garis di peta dan penyeberangan aman. Sebelum meninggalkan stasiun, kamu juga perlu memikirkan cara membawa arsip tanpa menjadikan kehidupan pribadi penelepon sebagai kehilangan berikutnya malam ini."
      },
      "choices": [
        {
          "id": "save-tide",
          "label": {
            "en": "Mark the tower route and prepare the archive",
            "id": "Tandai rute menara dan siapkan arsip"
          },
          "next": "ledger-choice",
          "effects": {
            "evidence": [
              "tide-table"
            ]
          }
        }
      ],
      "artAlt": {
        "en": "Harbor buoy swallowed by storm waves, tower stair and inland road visible behind, distant shelter lamp.",
        "id": "Kanal cuaca posko bukit · 01.54"
      }
    },
    "ledger-choice": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "ledger-choice",
      "location": {
        "en": "Archive export tray",
        "id": "Baki ekspor arsip"
      },
      "text": {
        "en": "The export tray gives you an archive that could help complete the account: the queue, the authorization, the voices that passed through the station. It also holds home addresses, staff identities, and details of private medical handoffs. You turn through the pages more carefully now. Evidence about a harmful decision is not the same thing as permission to expose everyone who had to live with it.\n\nYou can prepare a copy with those identities removed, preserving the order and the timestamps while marking the links you have not verified. That would let other people examine the record without receiving every private detail attached to it. Or you can seal the raw archive and leave immediately, keeping the choice open until you reach the transmitter. The original remains with you either way.\n\nArga's last message demands that everything be returned. You slide it under the folder and check the receiver's battery instead. Lia is waiting for a route, not another argument about ownership. Whatever you choose to carry, you need to leave with the callers still connected and without pretending that an unfinished account has somehow become certain.",
        "id": "Baki ekspor memberimu arsip yang bisa membantu melengkapi penjelasan: antrean, izin, dan suara-suara yang melewati stasiun. Isinya juga mencakup alamat rumah, identitas staf, serta rincian serah terima medis pribadi. Kamu kini membalik halaman lebih hati-hati. Bukti tentang keputusan yang merugikan tidak sama dengan izin membuka kehidupan semua orang yang menanggung akibatnya.\n\nKamu bisa menyiapkan salinan tanpa identitas itu, mempertahankan perintah serta waktu sambil menandai kaitan yang belum diverifikasi. Dengan begitu orang lain dapat memeriksa catatan tanpa menerima setiap rincian pribadi yang menyertainya. Atau kamu bisa menyegel arsip mentah dan segera berangkat, membiarkan pilihan terbuka sampai tiba di pemancar. Berkas asli tetap kamu bawa dalam kedua pilihan.\n\nPesan terakhir Arga menuntut semuanya dikembalikan. Kamu menyelipkannya di bawah map lalu memeriksa baterai radio. Lia menunggu rute, bukan perdebatan lain tentang kepemilikan. Apa pun yang kamu bawa, kamu perlu berangkat dengan penelepon tetap tersambung, tanpa berpura-pura bahwa penjelasan yang belum selesai tiba-tiba menjadi pasti."
      },
      "choices": [
        {
          "id": "prepare-redactions",
          "label": {
            "en": "Prepare a copy with identities removed",
            "id": "Siapkan salinan tanpa identitas pribadi"
          },
          "next": "act-two-close",
          "effects": {
            "flags": {
              "redactedCopyReady": true
            }
          }
        },
        {
          "id": "seal-raw",
          "label": {
            "en": "Seal the raw archive and leave now",
            "id": "Segel arsip mentah dan berangkat sekarang"
          },
          "next": "act-two-close",
          "effects": {
            "flags": {
              "rawArchiveSealed": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "A sealed raw archive envelope and a second redacted copy beside operator coat, close overhead composition.",
        "id": "Baki ekspor arsip"
      },
      "textVariants": [
        {
          "requires": {
            "archiveVerified": true
          },
          "text": {
            "en": "The export tray gives you the record that supports the sequence you checked: the queue, the signed authorization, and the recordings ECHO used. It also holds home addresses, staff identities, and details of private medical handoffs. You turn through the pages more carefully now. Proving who authorized the rule does not require treating every person named in its audit as public property.\n\nYou can prepare a copy with private identities removed while keeping the order, timestamps, and checked links intact. Other people would still be able to examine the decision and ask for further evidence, without receiving every detail of the callers' lives. Or you can seal the raw archive and leave immediately, keeping the choice open until the transmitter. Preparing the copy does not destroy the original.\n\nArga's last message demands that everything be returned. You put it beneath the folder and check the receiver's battery instead. The evidence is ready to travel; the people on the channel need a route. You can expose what was done without borrowing their consent in the same way the station borrowed your voice. Whether you will honor that distinction is still your decision.",
            "id": "Baki ekspor memberimu catatan yang mendukung urutan yang telah diperiksa: antrean, izin bertanda tangan, dan rekaman yang dipakai ECHO. Isinya juga mencakup alamat rumah, identitas staf, serta rincian serah terima medis pribadi. Kamu kini membalik halaman lebih hati-hati. Membuktikan siapa yang mengizinkan aturan tidak mengharuskanmu menganggap semua orang dalam audit sebagai milik umum.\n\nKamu bisa menyiapkan salinan tanpa identitas pribadi sambil mempertahankan perintah, waktu, dan kaitan yang sudah diuji. Orang lain masih dapat memeriksa keputusan itu dan meminta bukti tambahan tanpa menerima setiap rincian kehidupan penelepon. Atau kamu bisa menyegel arsip mentah dan segera berangkat, membiarkan pilihan terbuka sampai pemancar. Membuat salinan tidak menghancurkan berkas asli.\n\nPesan terakhir Arga menuntut semuanya dikembalikan. Kamu meletakkannya di bawah map lalu memeriksa baterai radio. Bukti siap dibawa; orang-orang di kanal membutuhkan rute. Kamu bisa mengungkap kejadian tanpa mengambil persetujuan mereka sebagaimana stasiun mengambil suaramu. Apakah perbedaan itu akan kamu hormati masih menjadi keputusanmu."
          }
        }
      ]
    },
    "act-two-close": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "act-two-close",
      "location": {
        "en": "Station exit · 01:59",
        "id": "Pintu keluar stasiun · 01.59"
      },
      "text": {
        "en": "You disconnect ECHO from the live dispatch line and wait long enough to hear the change. The repeating order stops. Rain fills the space it occupied, followed by a caller asking whether anyone is still there. You answer immediately. Removing the assembled voice has not finished the rescue; it has made room for the people who should have been heard all along.\n\nThe receiver stays on its battery as you lift it from the desk. You settle the archive beneath your coat, check that the live channel is clear, and tell Lia you are heading toward the tower. Outside the doorway, water runs across the step where you arrived tonight. Leaving the chair feels wrong until you remember that the job was never simply to remain in it.\n\n“Still there?” Lia asks as the signal changes in the corridor. “Still here,” you say, giving your location before she has to ask. Your own voice sounds less polished than the recording, and you let it. There is a route to reach, a crossing to arrange, and a record you have chosen to carry. None of those things needs you to sound certain about more than you know.",
        "id": "Kamu memutus ECHO dari jalur siaran langsung lalu menunggu sampai perubahannya terdengar. Perintah berulang itu berhenti. Hujan mengisi tempatnya, disusul penelepon yang bertanya apakah masih ada orang di sana. Kamu segera menjawab. Menghapus suara rakitan belum menyelesaikan penyelamatan; tindakan itu memberi ruang kepada orang yang seharusnya didengar sejak awal.\n\nRadio tetap hidup dengan baterainya saat kamu mengangkatnya dari meja. Kamu menyelipkan arsip di balik mantel, memastikan kanal langsung terbuka, lalu memberi tahu Lia bahwa kamu menuju menara. Di luar pintu, air mengalir melintasi undakan tempatmu tiba malam ini. Meninggalkan kursi terasa salah sampai kamu ingat bahwa pekerjaanmu bukan sekadar terus duduk di sana.\n\n“Masih ada?” tanya Lia saat sinyal berubah di lorong. “Masih di sini,” jawabmu, menyebut lokasi sebelum ia perlu bertanya. Suaramu sendiri terdengar tidak serapi rekaman, dan kamu membiarkannya. Ada jalur yang harus dicapai, penyeberangan yang perlu diatur, dan catatan yang kamu pilih untuk dibawa. Semuanya tidak mengharuskanmu terdengar lebih yakin daripada yang sungguh kamu ketahui."
      },
      "choices": [
        {
          "id": "leave-station",
          "label": {
            "en": "Carry the live radio to the tower",
            "id": "Bawa radio langsung ke menara"
          },
          "next": "tower-approach",
          "effects": {
            "flags": {
              "echoDisconnected": true
            },
            "quests": {
              "borrowed-voice": "complete",
              "last-transmission": "active"
            }
          }
        }
      ],
      "artAlt": {
        "en": "Operator back silhouette leaving dispatch doorway with battery receiver, coat sheltering archive envelope, lantern rain.",
        "id": "Pintu keluar stasiun · 01.59"
      }
    },
    "tower-approach": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "tower-approach",
      "location": {
        "en": "Tower approach · 02:03",
        "id": "Jalan menara · 02.03"
      },
      "text": {
        "en": "By the time you reach the tower, rain has found its way through your coat. The station is behind you now; the battery receiver is the only thing still carrying its callers. Above the harbor, the aerial bends in the wind. Someone has tied a strip of dry cloth around the handrail where the first step disappears into spray. You take hold of it and ask Lia for the latest headcount.\n\nShe reads slowly enough for you to write. Some of the people from the first landing are already on higher ground. Others are still making their way along the lower route, and a few need someone beside them to keep moving. You resist the urge to turn those names into a reassuring total. A number would sound tidier, but it would not tell a boat crew whom to look for.\n\nYou repeat the list over the live channel. Halfway through, a caller corrects the pronunciation of his name, then apologizes for interrupting. “Please keep doing that,” you tell him. “If I get something wrong, I need to hear it.” The climb is steep, and your legs are beginning to shake. For the first time tonight, you do not try to make your voice sound steadier than you are.",
        "id": "Saat tiba di menara, hujan sudah merembes ke dalam mantelmu. Stasiun tertinggal di belakang; hanya radio baterai yang masih menghubungkanmu dengan para penelepon. Di atas pelabuhan, antena melengkung diterpa angin. Seseorang mengikat kain kering pada pegangan tangga, tepat sebelum pijakan pertama tertutup percikan air. Kamu mencengkeramnya dan meminta hitungan terbaru kepada Lia.\n\nLia membaca pelan agar kamu sempat mencatat. Sebagian orang dari pendaratan pertama sudah mencapai tempat tinggi. Yang lain masih menempuh jalur bawah, beberapa perlu ditemani supaya bisa terus berjalan. Kamu menahan keinginan untuk merangkum nama-nama itu menjadi angka yang menenangkan. Angka memang lebih rapi, tetapi petugas perahu perlu tahu siapa yang harus dicari.\n\nKamu mengulang daftar itu di kanal langsung. Di tengah pembacaan, seorang penelepon membetulkan pengucapan namanya, lalu meminta maaf karena menyela. “Tolong tetap koreksi saya,” katamu. “Kalau ada yang salah, saya harus tahu.” Tangga makin curam dan kakimu mulai gemetar. Untuk pertama kalinya malam ini, kamu tidak berusaha membuat suaramu terdengar lebih tenang daripada keadaanmu."
      },
      "choices": [
        {
          "id": "reach-upper-landing",
          "label": {
            "en": "Reach the upper landing",
            "id": "Capai pendaratan atas"
          },
          "next": "final-hub"
        }
      ],
      "artAlt": {
        "en": "Tall coastal transmission tower above harbor surge, cloth tied to handrail, hooded operator climbing from behind.",
        "id": "Jalan menara · 02.03"
      }
    },
    "final-hub": {
      "type": "hub",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "final-hub",
      "location": {
        "en": "Upper landing · last local calls",
        "id": "Pendaratan atas · panggilan sekitar terakhir"
      },
      "text": {
        "en": "The upper landing offers a little shelter from the wind. Above you, a closed hatch leads to the public transmitter; below, a flare lights a maintenance ladder and a dog keeps barking from somewhere beside it. Two local channels are still trying to reach an operator. You set the receiver on a dry patch of concrete and listen long enough to separate the calls from the rain.\n\nThere is time to answer nearby callers before Iman opens the roof route. You can check the dog, take a rescue-channel call, or follow the voice breaking through the static. When you move on, the rising water will cut off a return to this landing. Lia reminds you that you do not have to solve every problem alone, but you do need to decide which messages to pass to the people who can help.",
        "id": "Pendaratan atas sedikit melindungimu dari angin. Di atasmu, pintu tertutup menuju pemancar umum; di bawah, suar menerangi tangga perawatan dan seekor anjing terus menggonggong dari dekatnya. Dua kanal sekitar masih berusaha menghubungi operator. Kamu meletakkan radio di bagian beton yang kering, lalu mendengarkan sampai suara panggilan bisa dibedakan dari hujan.\n\nMasih ada waktu menjawab warga sekitar sebelum Iman membuka jalur atap. Kamu bisa memeriksa anjing itu, menerima panggilan penyelamatan, atau mencari suara di balik desis radio. Sesudah kamu bergerak, air yang naik akan menutup jalan kembali ke sini. Lia mengingatkan bahwa kamu tidak harus menangani semuanya sendiri, tetapi kamu perlu memilih pesan mana yang akan diteruskan kepada orang yang bisa membantu."
      },
      "choices": [
        {
          "id": "help-dog",
          "label": {
            "en": "Check the dog below the route flare",
            "id": "Periksa anjing di bawah suar rute"
          },
          "next": "dog-bark",
          "effects": {
            "quests": {
              "dog": "active"
            }
          },
          "requiresQuest": {
            "dog": "unstarted"
          }
        },
        {
          "id": "listen-rescue",
          "label": {
            "en": "Answer one last rescue-channel call",
            "id": "Jawab satu panggilan penyelamatan terakhir"
          },
          "next": "encounter-rescue",
          "requiresQuest": {
            "enc-rescue": "unstarted"
          }
        },
        {
          "id": "listen-static",
          "label": {
            "en": "Follow a voice behind the static",
            "id": "Ikuti suara di balik desis radio"
          },
          "next": "encounter-static",
          "requiresQuest": {
            "enc-static": "unstarted"
          }
        },
        {
          "id": "open-roof",
          "label": {
            "en": "Open the tower hatch",
            "id": "Buka pintu atap menara"
          },
          "next": "roof-hatch",
          "effects": {
            "quests": {
              "dog": "missed"
            }
          }
        }
      ],
      "artAlt": {
        "en": "Tower upper landing with closed hatch above, distant flare below and inland stair vanishing into storm.",
        "id": "Pendaratan atas · panggilan sekitar terakhir"
      }
    },
    "roof-hatch": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "iman",
      "art": "empty",
      "artKey": "roof-hatch",
      "location": {
        "en": "Tower hatch",
        "id": "Pintu atap menara"
      },
      "text": {
        "en": "Iman calls from the switch platform on the other side of the tower. He has reached the hatch's manual latch, but the three bolts will not shift together. “Three bolts and two hands,” he mutters. “I would like a word with whoever drew this.” You keep your lamp pointed at the hinge while he braces one glove against the frame and works the last bolt free.\n\nThe hatch lifts far enough to reveal the inland road beyond the roof. Through the opening, you can hear another crew calling people toward the stair. Iman's radio knocks against a rung, making a crash so loud that you stop breathing for a moment. “I'm fine,” he says at once. “The radio wants everyone to know how hard it's working.” You laugh before you realize how badly you needed to.\n\nThen an electric lock slams shut behind him. You hear him test it, once, then again with more force. The hatch is open on your side, but the grille has sealed Iman inside the switch platform. His next words come without a joke. “That wasn't the water. Someone sent a command.” You tighten your grip on the receiver and ask who still has access to that lock.",
        "id": "Iman menghubungimu dari panggung sakelar di sisi lain menara. Ia sudah mencapai kait manual pintu atap, tetapi ketiga bautnya tidak mau bergeser bersamaan. “Tiga baut, dua tangan,” gumamnya. “Saya ingin ngobrol dengan orang yang merancang ini.” Kamu menyorot engsel dengan lampu sementara satu sarung tangannya menahan rangka dan tangan lain melepas baut terakhir.\n\nPintu terangkat cukup tinggi untuk memperlihatkan jalan daratan di balik atap. Dari celahnya, terdengar petugas lain mengarahkan orang menuju tangga. Radio Iman membentur pijakan, begitu keras sampai kamu sesaat menahan napas. “Saya baik-baik saja,” katanya cepat. “Radionya ingin semua orang tahu dia ikut kerja keras.” Kamu tertawa sebelum menyadari betapa kamu membutuhkan tawa itu.\n\nLalu kunci listrik menutup keras di belakangnya. Kamu mendengar Iman mencoba membukanya, sekali, lalu sekali lagi dengan tenaga lebih besar. Pintu di sisimu terbuka, tetapi jeruji telah mengurungnya di panggung sakelar. Kali ini ia tidak bercanda. “Bukan air yang menutupnya. Ada yang mengirim perintah.” Kamu mempererat pegangan pada radio dan bertanya siapa yang masih punya akses ke kunci itu."
      },
      "choices": [
        {
          "id": "check-lock",
          "label": {
            "en": "Ask who closed the lock",
            "id": "Tanyakan siapa yang menutup kunci"
          },
          "next": "switch-betrayal"
        }
      ],
      "artAlt": {
        "en": "Yellow gloves lifting manual hatch with three bolts, narrow inland road revealed through rain, head outside frame.",
        "id": "Pintu atap menara"
      }
    },
    "switch-betrayal": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "arga",
      "art": "empty",
      "artKey": "switch-betrayal",
      "location": {
        "en": "A final override",
        "id": "Penimpaan terakhir"
      },
      "text": {
        "en": "The private line lights up before Iman can answer. Arga speaks as if he is explaining a routine safety measure. “The relay protects the archive. Return the source to the station, and I will release the platform.” You look from the receiver to the open hatch. He has kept the route available while locking in the man who made it available, and he expects you to call that protection.\n\n“You're holding an evacuation worker behind a grille,” you say. Arga insists that nobody needs to get hurt, provided you stop transmitting and return what belongs to the station. There is no assembled voice to blame this time. The order is his, spoken live. Below you, the bridge crew is asking for a crossing signal, and Iman is still testing the lock with one tired hand.\n\nIman comes back on the public channel. “Tell him my daughter is waiting,” he says, then lets the thought go. “No. He knows people are waiting. Ask him about the release.” You can keep the exchange public and refuse the demand, or press Arga for proof that Iman's route is open. Either way, a private argument cannot be allowed to swallow the rescue calls below.",
        "id": "Jalur pribadi menyala sebelum Iman sempat menjawab. Arga bicara seolah sedang menjelaskan prosedur keselamatan biasa. “Relai melindungi arsip. Kembalikan sumbernya ke stasiun, dan saya akan membuka panggung itu.” Kamu menatap radio, lalu pintu atap yang terbuka. Ia membiarkan jalur tersedia sambil mengurung orang yang membukanya, dan berharap kamu menyebutnya perlindungan.\n\n“Anda mengurung petugas evakuasi di balik jeruji,” katamu. Arga bersikeras tidak ada yang perlu terluka, asalkan kamu berhenti menyiarkan dan mengembalikan milik stasiun. Kali ini tidak ada suara rakitan yang bisa disalahkan. Perintah itu diucapkan langsung olehnya. Di bawahmu, petugas jembatan meminta tanda menyeberang, sementara Iman masih mencoba kuncinya dengan satu tangan yang lelah.\n\nIman kembali di kanal umum. “Bilang anak saya menunggu,” katanya, lalu mengurungkan pikiran itu. “Tidak usah. Dia tahu orang-orang menunggu. Tanyakan kait pelepasnya.” Kamu bisa mempertahankan percakapan terbuka dan menolak tuntutan Arga, atau meminta bukti bahwa jalur Iman sudah terbuka. Apa pun pilihanmu, pertengkaran pribadi ini tidak boleh menenggelamkan panggilan penyelamatan dari bawah."
      },
      "choices": [
        {
          "id": "refuse-hostage",
          "label": {
            "en": "Keep the rescue on the public channel",
            "id": "Pertahankan penyelamatan di kanal umum"
          },
          "next": "rescue-check",
          "effects": {
            "flags": {
              "refusalRecorded": true
            }
          }
        },
        {
          "id": "buy-seconds",
          "label": {
            "en": "Ask for proof that Iman’s route is open",
            "id": "Minta bukti jalur Iman sudah terbuka"
          },
          "next": "rescue-check",
          "effects": {
            "flags": {
              "bargainedArga": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "Locked electric grille enclosing switch platform, yellow glove gripping bars, red override lamp.",
        "id": "Penimpaan terakhir"
      }
    },
    "rescue-check": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "lia",
      "art": "empty",
      "artKey": "rescue-check",
      "location": {
        "en": "Lower route headcount · 02:08",
        "id": "Hitungan jalur bawah · 02.08"
      },
      "text": {
        "en": "Lia reaches the upper landing with a rescue crew and brings the conversation back to the people below. She reads the first landing's headcount, then adds the callers still on the lower route. Earlier decisions have changed who arrived dry and who is still waiting. Some can walk unaided. Others lean on a neighbor, too tired to pretend they can manage another stair alone.\n\nThe tower route is open, but using it means holding the bridge while a crew reaches Iman's manual release. Lia asks each group for someone who can help with the rail and someone who can keep the names together. “Don't tell me you're all fine because you're embarrassed,” she says into the receiver. A woman answers that she needs a shoulder. Another voice immediately offers one.\n\nYou start to read the total, and Lia stops you gently. “Names first. We can add the numbers afterward.” She wants a count that another crew can check, with every unanswered caller still visible. You turn to a clean part of the route board. Before you choose how to cross, everyone needs to hear what each plan can actually do, and who may still have to wait for a boat.",
        "id": "Lia tiba di pendaratan atas bersama regu penyelamat, lalu mengembalikan percakapan kepada orang-orang di bawah. Ia membaca hitungan pertama dan menambahkan penelepon yang masih berada di jalur bawah. Keputusanmu tadi menentukan siapa yang tiba kering dan siapa yang masih menunggu. Sebagian bisa berjalan sendiri. Yang lain bersandar pada tetangga, terlalu lelah untuk berpura-pura sanggup menaiki tangga lagi.\n\nJalur menara terbuka, tetapi jembatan harus dijaga sementara petugas mencapai kait pelepas manual Iman. Lia meminta tiap rombongan menunjuk seseorang untuk membantu di pagar dan seseorang untuk mencatat nama. “Jangan bilang semuanya baik karena malu minta tolong,” katanya ke radio. Seorang perempuan mengaku perlu dipapah. Suara lain langsung menawarkan bantuan.\n\nKamu mulai membaca jumlahnya, lalu Lia menghentikanmu dengan lembut. “Nama dulu. Angkanya bisa dijumlahkan sesudah itu.” Ia ingin hitungan yang bisa diperiksa petugas lain, dengan setiap panggilan belum terjawab tetap tercatat. Kamu mencari bagian kosong di papan rute. Sebelum memilih cara menyeberang, semua orang perlu tahu apa yang bisa dicapai setiap rencana dan siapa yang mungkin masih harus menunggu perahu."
      },
      "choices": [
        {
          "id": "choose-crossing",
          "label": {
            "en": "Choose the crossing plan",
            "id": "Pilih rencana menyeberang"
          },
          "next": "flood-choice"
        }
      ],
      "artAlt": {
        "en": "Blue hooded medic seen from rear holding pencil and live headcount board, two groups of fully covered silhouettes.",
        "id": "Hitungan jalur bawah · 02.08"
      }
    },
    "flood-choice": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "flood-choice",
      "location": {
        "en": "The bridge and the release",
        "id": "Jembatan dan kait pelepas"
      },
      "text": {
        "en": "Iman can hear the surge before you see it. He asks you to make the crossing decision now, while the bridge crew can still hold the rail. A coordinated signal would let both waiting groups move together and give the crew time to reach his manual release. For that to work, people need a neighborhood bell they can hear or a marked ladder they can follow through the rain.\n\nWithout that support, the manual stair is still usable. You would send fewer people at a time, keeping someone at the rail to guide each group. It is slower, and the last group may have to wait for a rescue boat. Closing the lower crossing is the other option: those already above the flood could retreat to the roof, but the people below and Iman would remain a rescue crew's responsibility.\n\nLia asks what she should tell the waiting callers. You study the route board, then the water beneath it. You want to offer a plan with no one left outside it; wanting one does not give you one. Whatever you choose, you will explain the limit before anyone starts moving. They have already spent too much of this night following instructions whose real cost was hidden from them.",
        "id": "Iman mendengar gelombang sebelum kamu melihatnya. Ia meminta keputusan sekarang, selagi petugas jembatan masih sanggup menjaga pagar. Tanda yang serentak memungkinkan kedua rombongan bergerak bersama dan memberi petugas waktu mencapai kait pelepas manualnya. Agar berhasil, warga membutuhkan lonceng yang bisa didengar atau tangga bertanda yang dapat diikuti di tengah hujan.\n\nTanpa bantuan itu, tangga manual masih bisa digunakan. Kamu akan mengirim lebih sedikit orang setiap giliran, dengan seseorang tetap menjaga pagar untuk memandu mereka. Jalurnya lebih lambat; rombongan terakhir mungkin harus menunggu perahu penyelamat. Pilihan lainnya menutup penyeberangan bawah. Orang yang sudah berada di atas air bisa mundur ke atap, tetapi warga di bawah dan Iman masih memerlukan pertolongan petugas.\n\nLia bertanya apa yang harus disampaikan kepada para penelepon. Kamu mempelajari papan rute, lalu air di bawahnya. Kamu ingin punya rencana yang tidak meninggalkan siapa pun; keinginan itu belum membuatnya tersedia. Apa pun pilihanmu, batasnya akan kamu jelaskan sebelum mereka bergerak. Mereka sudah terlalu lama mengikuti instruksi yang menyembunyikan akibat sebenarnya."
      },
      "choices": [
        {
          "id": "bell-crossing",
          "label": {
            "en": "Use the bell; hold the bridge for both groups",
            "id": "Pakai lonceng; jaga jembatan untuk dua rombongan"
          },
          "next": "crossing-report",
          "effects": {
            "flags": {
              "massEvacuation": true,
              "bridgeHeld": true,
              "manualRoute": false
            }
          },
          "requires": {
            "communityBell": true
          }
        },
        {
          "id": "flare-crossing",
          "label": {
            "en": "Use the marked ladder; guide both groups",
            "id": "Pakai tangga bertanda; pandu kedua rombongan"
          },
          "next": "crossing-report",
          "effects": {
            "flags": {
              "massEvacuation": true,
              "bridgeHeld": true,
              "manualRoute": false
            }
          },
          "requires": {
            "flaredRoute": true
          }
        },
        {
          "id": "manual-crossing",
          "label": {
            "en": "Lead small groups along the manual route",
            "id": "Pandu rombongan kecil lewat rute manual"
          },
          "next": "crossing-report",
          "effects": {
            "flags": {
              "massEvacuation": false,
              "bridgeHeld": true,
              "manualRoute": true
            }
          }
        },
        {
          "id": "retreat-crossing",
          "label": {
            "en": "Close the lower crossing; retreat to the roof",
            "id": "Tutup jalur bawah; mundur ke atap"
          },
          "next": "crossing-report",
          "effects": {
            "flags": {
              "massEvacuation": false,
              "bridgeHeld": false,
              "manualRoute": false
            }
          }
        }
      ],
      "artAlt": {
        "en": "Wide bridge viewed from tower railing, rushing lower water, dry manual stair branching toward inland road.",
        "id": "Jembatan dan kait pelepas"
      }
    },
    "crossing-report": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "lia",
      "art": "empty",
      "artKey": "crossing-report",
      "location": {
        "en": "Crossing report · live names",
        "id": "Laporan penyeberangan · nama langsung"
      },
      "text": {
        "en": "The first replies come in as the crossing begins. You write each name only after hearing it from a caller or a crew member who can confirm where they are. Sleeves drip onto the landing; someone passes a bag forward before helping the person behind them. Your pencil keeps slipping in your glove, so you take the glove off and work with a hand that is cold enough to hurt.\n\nThe route board now shows the consequences of everything you arranged earlier: which paths have light, who is willing to follow your instructions, and what help the neighbors have made available. Lia checks the arrivals beside you. Whenever a name does not answer, she leaves space for the next report rather than deciding what the silence means. You keep the rescue channel open as you prepare to move up.\n\nAbove the last step, the public transmitter has begun to hum. The archive is still dry inside your coat. Until now, you could postpone deciding what to do with it because someone needed a route or a reply. That reason is running out. You carry the receiver upstairs, keeping the live names within reach, and ask Lia to stay while you make the choice the whole city will hear.",
        "id": "Jawaban pertama masuk ketika penyeberangan dimulai. Kamu menulis setiap nama hanya setelah mendengarnya dari penelepon atau petugas yang dapat memastikan posisi mereka. Lengan baju menetes di pendaratan; seseorang mengoper tas sebelum membantu orang di belakangnya. Pensilmu terus terlepas dari sarung tangan, jadi kamu melepasnya dan menulis dengan tangan yang dinginnya mulai menyakitkan.\n\nPapan rute kini memperlihatkan akibat semua yang kamu atur sebelumnya: jalur mana yang terang, siapa yang mau mengikuti arahanmu, dan bantuan apa yang disiapkan warga. Lia memeriksa kedatangan di sampingmu. Jika sebuah nama belum menjawab, ia menyisakan tempat untuk laporan berikutnya, alih-alih menebak arti diam itu. Kanal penyelamatan tetap terbuka saat kamu bersiap naik.\n\nDi atas anak tangga terakhir, pemancar umum mulai berdengung. Arsip masih kering di dalam mantelmu. Selama ini keputusan tentangnya bisa ditunda karena ada orang yang membutuhkan jalur atau jawaban. Alasan itu hampir habis. Kamu membawa radio ke atas, menjaga daftar nama tetap dekat, dan meminta Lia menemanimu saat membuat pilihan yang akan didengar seluruh kota."
      },
      "choices": [
        {
          "id": "reach-transmitter",
          "label": {
            "en": "Reach the public transmitter",
            "id": "Capai pemancar umum"
          },
          "next": "public-channel"
        }
      ],
      "textVariants": [
        {
          "requires": {
            "massEvacuation": true
          },
          "text": {
            "en": "The agreed signal reaches both groups. The bridge crew holds the rail as people cross, and Lia checks each arriving name against the list in your hand. The last caller through is Iman. A stranger has a firm grip on his yellow glove; between them, they negotiate the final step with the seriousness of people who have no strength left for a stumble.\n\nIman sits down without waiting to be asked. “Next time,” he says, “I would like a job with a chair.” Lia passes him water, then reads the lower-route names again. Every name on that board now has an answer from someone above the flood. There is still treatment to arrange and shelter to find, but for this crossing she can finally put down the pencil without leaving a blank beside anyone.\n\nYou wait until his breathing settles before moving toward the transmitter. Beneath your coat, the archive is dry; its weight has become harder to ignore now that it is no longer competing with the next rescue instruction. Lia picks up the receiver to keep the arrivals channel open. You climb the last step knowing the crossing is finished, and that what you send from here can still hurt people who survived it.",
            "id": "Tanda yang disepakati mencapai kedua rombongan. Petugas menjaga pagar saat warga menyeberang, dan Lia mencocokkan setiap nama yang tiba dengan daftar di tanganmu. Iman menjadi orang terakhir yang lewat. Seorang warga memegang erat sarung tangan kuningnya; mereka melewati pijakan terakhir dengan hati-hati, seperti orang yang sudah tidak punya tenaga untuk tersandung lagi.\n\nIman langsung duduk. “Lain kali,” katanya, “saya ingin pekerjaan yang ada kursinya.” Lia memberinya air, lalu membaca kembali nama-nama dari jalur bawah. Semua nama di papan itu kini sudah dijawab oleh seseorang di atas banjir. Perawatan dan tempat berlindung masih perlu diatur, tetapi untuk penyeberangan ini ia akhirnya bisa meletakkan pensil tanpa meninggalkan kolom kosong.\n\nKamu menunggu napas Iman teratur sebelum menuju pemancar. Di balik mantel, arsip tetap kering; keberadaannya makin terasa sekarang, ketika tidak lagi bersaing dengan instruksi penyelamatan berikutnya. Lia mengambil radio untuk menjaga kanal kedatangan. Kamu menaiki anak tangga terakhir dengan penyeberangan yang sudah selesai, sambil tahu bahwa siaranmu masih bisa melukai orang yang berhasil melewatinya."
          }
        },
        {
          "requires": {
            "manualRoute": true
          },
          "text": {
            "en": "Small groups make their way up the manual stair, one hand on the rail and another on whoever needs help. The bridge crew keeps the route open long enough to reach Iman's release. When he crawls out through the hatch, he tries to stand too quickly and has to sit back down. You stay beside him until he can tell Lia his name clearly enough for her to mark his arrival.\n\nThe last lower group cannot cross before the surge. Lia reaches them on the rescue channel and asks a boat crew to confirm their position. She reads their names back, making sure they know they have not dropped off the board just because the stair is closed. You can hear relief in some replies and anger in others. Both belong on the line. You tell them you will keep taking reports.\n\nAt the top step, the transmitter is ready and the archive is still dry. You have brought people through, but the smaller count will not let you describe this as a complete evacuation. Lia stays with the boat channel while you prepare the public message. Before you explain the stolen voice and the station's choices, you write down the names of those whose rescue is still unfinished.",
            "id": "Rombongan kecil menaiki tangga manual, satu tangan di pagar dan tangan lain membantu orang yang membutuhkan. Petugas menjaga jalur cukup lama untuk mencapai kait pelepas Iman. Saat merangkak keluar dari pintu, ia mencoba berdiri terlalu cepat dan harus duduk lagi. Kamu menemaninya sampai ia bisa menyebut nama dengan jelas agar Lia menandai kedatangannya.\n\nRombongan bawah terakhir tidak sempat menyeberang sebelum gelombang datang. Lia menghubungi mereka di kanal penyelamatan dan meminta petugas perahu memastikan posisinya. Ia mengulang nama-nama mereka, supaya jelas bahwa jalur tertutup tidak membuat mereka hilang dari catatan. Sebagian terdengar lega, sebagian marah. Keduanya berhak tetap didengar. Kamu mengatakan akan terus menerima laporan.\n\nDi anak tangga teratas, pemancar sudah siap dan arsip masih kering. Kamu berhasil membawa orang melewati jalur, tetapi jumlah yang lebih kecil itu tidak membenarkan sebutan evakuasi tuntas. Lia menjaga kanal perahu sementara kamu menyiapkan pesan umum. Sebelum menjelaskan suara yang dicuri dan keputusan stasiun, kamu menulis nama mereka yang penyelamatannya masih belum selesai."
          }
        },
        {
          "requires": {
            "bridgeHeld": false
          },
          "text": {
            "en": "You close the lower crossing and direct everyone already above the flood toward the roof. The bridge crew pulls back before the surge reaches the rail. Lia moves the remaining callers onto the rescue boat channel, asking them to describe where they can wait above the water. You write their answers carefully. Closing a route means finding another way to reach them, even if you cannot promise when it will arrive.\n\nIman's platform light goes out. For a moment, all you hear is rain against the receiver; then his battery radio comes through. “Still here,” he says. You ask him to keep it close and save the battery between reports. Lia puts his name at the top of a boat request. Nobody pretends the lock has opened. He is waiting, and the crew needs to know exactly where.\n\nThe roof is high enough to transmit from, but you cannot settle into the safety it offers. Below it, the rescue is still incomplete. You carry the dry archive to the public transmitter and leave the live receiver beside it, where you can hear another call immediately. Whatever account you give of tonight will have to include the crossing you closed and the people who are still asking for a way out.",
            "id": "Kamu menutup penyeberangan bawah dan mengarahkan orang yang sudah berada di atas banjir menuju atap. Petugas jembatan mundur sebelum gelombang mencapai pagar. Lia memindahkan penelepon tersisa ke kanal perahu, meminta mereka menjelaskan tempat menunggu yang masih berada di atas air. Kamu mencatat jawaban mereka dengan teliti. Jalur yang ditutup tetap membutuhkan pengganti, meski kamu belum bisa menjanjikan kapan bantuan tiba.\n\nLampu panggung Iman padam. Sesaat hanya terdengar hujan menghantam radio, lalu radio baterainya menyambung. “Masih di sini,” katanya. Kamu memintanya menjaga radio tetap dekat dan menghemat baterai di antara laporan. Lia menaruh namanya paling atas dalam permintaan perahu. Tak ada yang berpura-pura kuncinya sudah terbuka. Iman masih menunggu, dan petugas perlu tahu tepat di mana.\n\nAtap cukup tinggi untuk menyiarkan pesan, tetapi rasa aman itu belum membuatmu tenang. Di bawahnya, penyelamatan masih belum selesai. Kamu membawa arsip kering ke pemancar dan meletakkan radio langsung di sampingnya agar panggilan baru segera terdengar. Penjelasanmu tentang malam ini harus memuat penyeberangan yang kamu tutup dan orang-orang yang masih meminta jalan keluar."
          }
        }
      ],
      "artAlt": {
        "en": "Wet sleeves reaching across a handrail, yellow glove among them, blurred faceless hooded figures climbing away.",
        "id": "Laporan penyeberangan · nama langsung"
      }
    },
    "public-channel": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "public-channel",
      "location": {
        "en": "Public transmitter · 02:17",
        "id": "Pemancar umum · 02.17"
      },
      "text": {
        "en": "The public transmitter takes a few seconds to settle onto the emergency band. Voices overlap before you can identify them: a mother checking how many pairs of shoes came off the bus, a driver offering three empty seats, a man asking which shelter has his brother. The channel is busy with ordinary details that have become urgent. You wait for a gap instead of speaking over someone who has waited all night to be heard.\n\nLia stands beside you while you unpack the archive. This is the channel that can carry an account beyond the station's control. It can also carry every private identity attached to that account. Once the raw file leaves the tower, you will not be able to ask each listener to give back an address or forget a clean recording of your voice. Arga's decisions belong in public; the file holds more than his decisions.\n\n“A true account can still hurt someone,” Lia says. She does not tell you which button to press. Instead, she asks what you would say to a caller who discovered that asking for rescue had also made their home public. You look down at the names, then check the archive again. Before you transmit anything, you need to be clear about whose information is traveling with the evidence.",
        "id": "Pemancar umum membutuhkan beberapa detik untuk masuk ke kanal darurat. Suara-suara bertumpuk: seorang ibu memeriksa jumlah pasang sepatu yang turun dari bus, sopir menawarkan tiga kursi kosong, seorang lelaki mencari posko tempat adiknya berada. Hal-hal sehari-hari kini menjadi mendesak. Kamu menunggu jeda, tidak ingin menimpa suara orang yang mungkin sudah semalaman berusaha didengar.\n\nLia berdiri di sampingmu saat arsip dikeluarkan. Kanal ini bisa membawa penjelasan keluar dari kendali stasiun. Ia juga bisa membawa semua identitas pribadi yang menempel pada penjelasan itu. Begitu berkas mentah meninggalkan menara, kamu tidak bisa meminta tiap pendengar mengembalikan alamat atau melupakan rekaman bersih suaramu. Keputusan Arga perlu diketahui umum; isi berkas melampaui keputusannya.\n\n“Penjelasan yang benar masih bisa melukai orang,” kata Lia. Ia tidak menentukan tombol mana yang harus kamu tekan. Sebaliknya, ia bertanya apa yang akan kamu katakan kepada penelepon yang baru tahu bahwa meminta bantuan juga membuat alamat rumahnya tersebar. Kamu menatap daftar nama, lalu memeriksa arsip lagi. Sebelum mengirim apa pun, kamu perlu jelas tentang informasi siapa yang ikut bersama bukti itu."
      },
      "choices": [
        {
          "id": "weigh-record",
          "label": {
            "en": "Check the people inside the record",
            "id": "Periksa orang yang ada di dalam catatan"
          },
          "next": "before-publication"
        }
      ],
      "artAlt": {
        "en": "Public transmitter antenna and sheltered radio desk on tower roof, cloth covered evacuee backs beyond.",
        "id": "Pemancar umum · 02.17"
      }
    },
    "before-publication": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "before-publication",
      "location": {
        "en": "Three things the archive holds",
        "id": "Tiga hal di dalam arsip"
      },
      "text": {
        "en": "You lay out what the archive contains so Lia can check your reasoning. The signed order records Arga's priority decision. The queue files contain private identities and handoffs. The source recordings contain enough clean speech for ECHO to assemble your voice again. They are stored together, but they do not all need the same audience. You wish someone at the station had asked that question before putting them in one system.\n\nPublishing the complete archive would give listeners the original signatures, times, and identities immediately. A protected copy would keep the sequence and authorization available while withholding private details; reviewers would need controlled access and willing witnesses to check the rest. Neither choice would finish every investigation tonight. The difference is what strangers could copy while that work was still underway.\n\nYou could also destroy this source and speak from your own knowledge. That would prevent this module from being used again, though it cannot tell you whether other copies exist. It would also sacrifice the strongest original audit. Lia waits while you check each consequence aloud. “Whichever one you choose,” she says, “tell them what you kept, what you removed, and what they still need to verify.”",
        "id": "Kamu menjelaskan isi arsip agar Lia bisa memeriksa alasanmu. Perintah bertanda tangan mencatat keputusan prioritas Arga. Berkas antrean memuat identitas dan perpindahan pribadi. Rekaman sumber menyediakan ucapan bersih yang cukup untuk merakit suaramu lagi. Semuanya tersimpan bersama, tetapi tidak semuanya perlu didengar orang yang sama. Kamu berharap ada yang memikirkan itu sebelum memasukkannya ke dalam satu sistem.\n\nMenyiarkan arsip lengkap akan langsung memberikan tanda tangan, waktu, dan identitas asli kepada pendengar. Salinan terlindungi tetap menunjukkan urutan dan otorisasi tanpa menyebarkan rincian pribadi; pemeriksa perlu akses terbatas dan saksi yang bersedia untuk meninjau sisanya. Tidak satu pun menyelesaikan seluruh penyelidikan malam ini. Perbedaannya terletak pada apa yang bisa disalin orang asing selama pemeriksaan berjalan.\n\nKamu juga bisa memusnahkan sumber ini dan memberi kesaksian sendiri. Modul ini tidak akan dapat dipakai lagi, meski kamu belum tahu apakah salinan lain ada. Bukti asli yang paling kuat juga akan hilang. Lia menunggu saat kamu menyebut setiap akibatnya. “Apa pun pilihanmu,” katanya, “jelaskan yang kamu simpan, yang kamu hapus, dan yang masih perlu mereka periksa.”"
      },
      "choices": [
        {
          "id": "choose-record",
          "label": {
            "en": "Decide what leaves the tower",
            "id": "Pilih yang akan meninggalkan menara"
          },
          "next": "publication"
        }
      ],
      "artAlt": {
        "en": "Open archive module between a signed routing page and neatly redacted identity slips, rain on sleeve edges.",
        "id": "Tiga hal di dalam arsip"
      }
    },
    "publication": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "publication",
      "location": {
        "en": "Final archive decision",
        "id": "Keputusan arsip terakhir"
      },
      "text": {
        "en": "Your thumb rests beside the send switch. Somewhere below the roof, a crew is still exchanging names with the shelter desk. You can hear them through the receiver, confirming each arrival twice. In front of you lies a record that made people disappear from a queue without moving them anywhere. Sending it might force the station to answer for that. Sending all of it would also give strangers information those callers never offered them.\n\nYou think about how easily the station treated your consent as a detail it could work around. You agreed to training recordings; nobody asked whether your voice could direct a real evacuation. The callers in this archive were not asked to become public evidence either. At the same time, destroying the source would leave the people investigating Arga with less than you held in your own hands tonight.\n\nLia moves the live receiver closer, leaving the decision to you. The rain eases enough that you can hear a driver asking for one more passenger. You take a breath and decide what the transmitter will carry: the complete raw archive, a public copy with private identities protected, or your live testimony after the source is destroyed. This choice will not change who crossed the bridge. It will change what follows them into morning.",
        "id": "Ibu jarimu berada di samping tombol kirim. Di bawah atap, petugas masih bertukar nama dengan meja posko. Lewat radio, kamu mendengar mereka memastikan setiap kedatangan dua kali. Di depanmu ada catatan yang membuat orang hilang dari antrean tanpa memindahkan mereka ke mana pun. Mengirimnya mungkin memaksa stasiun menjawab. Mengirim semuanya juga akan memberi orang asing informasi yang tidak pernah ditawarkan para penelepon.\n\nKamu teringat betapa mudahnya stasiun memperlakukan izinmu sebagai hal yang bisa diabaikan. Kamu menyetujui rekaman latihan; tak ada yang meminta izin memakai suaramu untuk evakuasi nyata. Para penelepon di arsip ini juga tidak diminta menjadi bukti publik. Namun jika sumber dimusnahkan, penyelidik keputusan Arga akan menerima lebih sedikit daripada yang kamu pegang sendiri malam ini.\n\nLia mendekatkan radio langsung, menyerahkan keputusan kepadamu. Hujan mereda sehingga suara sopir yang menawarkan satu tempat lagi terdengar jelas. Kamu menarik napas dan memilih isi siaran: seluruh arsip mentah, salinan umum dengan identitas terlindungi, atau kesaksian langsung setelah sumber dimusnahkan. Pilihan ini tidak mengubah siapa yang menyeberang jembatan. Ia mengubah apa yang akan mereka hadapi sesudah pagi tiba."
      },
      "choices": [
        {
          "id": "release-full",
          "label": {
            "en": "Publish the complete raw archive",
            "id": "Siarkan seluruh arsip mentah"
          },
          "next": "final-send",
          "effects": {
            "flags": {
              "publishedFull": true,
              "protectedNames": false,
              "destroyedArchive": false
            }
          }
        },
        {
          "id": "release-protected",
          "label": {
            "en": "Publish the sequence; protect private identities",
            "id": "Siarkan urutannya; lindungi identitas pribadi"
          },
          "next": "final-send",
          "effects": {
            "flags": {
              "publishedFull": false,
              "protectedNames": true,
              "destroyedArchive": false,
              "redactedCopyReady": true
            }
          }
        },
        {
          "id": "burn-source",
          "label": {
            "en": "Destroy the source; send your live testimony",
            "id": "Musnahkan sumber; kirim kesaksian langsungmu"
          },
          "next": "final-send",
          "effects": {
            "flags": {
              "publishedFull": false,
              "protectedNames": false,
              "destroyedArchive": true
            }
          }
        }
      ],
      "artAlt": {
        "en": "A thumb poised above physical send switch, raw audit envelope and private recording cassette adjacent.",
        "id": "Keputusan arsip terakhir"
      }
    },
    "final-send": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "final-send",
      "location": {
        "en": "A voice you choose",
        "id": "Suara yang kamu pilih"
      },
      "text": {
        "en": "You give your name before explaining why your voice has already been heard tonight. The evacuation announcement was assembled from recordings you made for training. Arga authorized the priority rule, and the queue header was reset after the clinic transfer failed. You explain what the archive can show and what further review must establish. There is no reason to make the account sound more complete than the evidence you have.\n\nThen you turn to the rescue list. You read one location incorrectly, stop, and repeat it with the correction. For a moment you want to begin again and leave a cleaner version behind. Instead, you say which line was wrong so the boat crew can correct its own copy. A driver answers with a route update, and you write that down before continuing. The work is still happening while you speak.\n\nWhen you finish, the channel fills with practical replies. Someone can offer a dry room. A crew needs the position of the next pickup. A caller asks you to repeat a name. You do, without rushing them. Lia takes the archive while you keep hold of the live receiver. Whatever becomes of your account tomorrow, tonight someone is still listening for an answer, and you stay until that answer has reached them.",
        "id": "Kamu menyebut namamu sebelum menjelaskan mengapa suaramu sudah terdengar malam ini. Siaran evakuasi dirakit dari rekaman yang kamu buat untuk latihan. Arga mengizinkan aturan prioritas, dan kepala antrean diubah setelah perpindahan klinik gagal. Kamu menjelaskan yang bisa ditunjukkan arsip dan yang masih harus ditetapkan pemeriksaan lanjutan. Penjelasan itu tidak perlu terdengar lebih lengkap daripada bukti yang kamu miliki.\n\nLalu kamu membaca daftar penyelamatan. Satu lokasi terucap salah; kamu berhenti dan mengulangnya dengan koreksi. Sesaat kamu ingin memulai lagi agar versi yang tertinggal lebih rapi. Sebaliknya, kamu menyebut baris yang salah supaya petugas perahu bisa membetulkan salinannya. Sopir menjawab dengan pembaruan rute, dan kamu mencatatnya sebelum melanjutkan. Pekerjaan tetap berlangsung saat kamu bicara.\n\nSesudah selesai, kanal dipenuhi jawaban praktis. Seseorang menyediakan kamar kering. Petugas meminta posisi penjemputan berikutnya. Penelepon meminta sebuah nama diulang. Kamu mengulangnya tanpa memburu mereka. Lia memegang arsip sementara kamu tetap menjaga radio langsung. Apa pun yang terjadi pada penjelasanmu besok, malam ini masih ada orang menunggu jawaban, dan kamu bertahan sampai jawaban itu diterima."
      },
      "choices": [
        {
          "id": "wait-morning",
          "label": {
            "en": "Stay until the last reply",
            "id": "Tetap di sini sampai jawaban terakhir"
          },
          "next": "dawn-crossing",
          "effects": {
            "flags": {
              "finalTransmissionSent": true
            },
            "quests": {
              "last-transmission": "complete"
            }
          }
        }
      ],
      "textVariants": [
        {
          "requires": {
            "archiveVerified": false
          },
          "text": {
            "en": "You begin with your name and the facts you can support. Arga admitted authorizing the dock priority. Your consent covered training recordings, not live dispatch. The files show a reused queue header, but you did not finish comparing the documentary sequence. You say that plainly. People listening need to know where your account is solid and where another reviewer must still do the work.\n\nYou explain your decision about the source: whether the public received the full file, a protected copy, or your testimony after its destruction. Whatever you chose, the unfinished comparison remains unfinished. You do not let the relief of reaching a transmitter turn a suspicion into a proven timeline. Lia listens beside you, checking that the people who might investigate tomorrow will be able to separate your observations from your conclusions.\n\nThen you read the rescue names. You get one location wrong, stop, and correct it on the live channel so every crew can change its copy. A boat operator repeats the correction back to you. The simple exchange steadies your breathing more than an effortless performance would have. You keep the receiver close and wait for the next report; there is still useful work you can do without claiming to know everything.",
            "id": "Kamu mulai dengan nama dan fakta yang bisa kamu dukung. Arga mengakui telah mengizinkan prioritas dermaga. Izinmu hanya mencakup rekaman latihan, bukan arahan langsung. Berkas menunjukkan kepala antrean yang dipakai ulang, tetapi kamu belum selesai mencocokkan urutan dokumennya. Kamu mengatakannya terus terang. Pendengar perlu tahu bagian yang sudah kuat dan bagian yang masih memerlukan pekerjaan pemeriksa lain.\n\nKamu menjelaskan keputusan tentang sumber: apakah publik menerima seluruh berkas, salinan terlindungi, atau kesaksianmu setelah sumber dimusnahkan. Apa pun pilihanmu, perbandingan yang belum selesai tetap disebut belum selesai. Kelegaan karena mencapai pemancar tidak membuat dugaan berubah menjadi urutan waktu yang terbukti. Lia mendengarkan, memastikan penyelidik besok dapat membedakan pengamatanmu dari kesimpulanmu.\n\nLalu kamu membaca nama penyelamatan. Satu lokasi salah disebut; kamu berhenti dan membetulkannya di kanal langsung agar semua petugas dapat mengubah catatan. Operator perahu mengulang koreksi itu kepadamu. Percakapan sederhana tersebut lebih menenangkan napasmu daripada penampilan tanpa kesalahan. Kamu mendekatkan radio dan menunggu laporan berikutnya; masih ada pekerjaan berguna yang dapat dilakukan tanpa mengaku tahu semuanya."
          }
        },
        {
          "requires": {
            "destroyedArchive": true
          },
          "text": {
            "en": "You destroy the archive source before turning to the microphone. The original voice splices and signed audit on this module will not be available for a reviewer to recover. For a moment, you keep waiting to feel certain that this was the right cost to pay. Certainty does not arrive. You tell the live channel exactly what you destroyed, including the evidence that could have tested your own account.\n\nThen you describe the sequence you checked: Arga's priority order, the failed clinic handoff, and the reused header that hid the waiting requests. You explain that your training consent never permitted live dispatch. Independent copies and willing witnesses will now have to carry parts of the investigation the original archive could have settled. Destroying this source prevents its reuse; you do not claim that it erases every copy that might exist elsewhere.\n\nLast, you read the rescue names and the positions the crews have confirmed. Once, you correct a location aloud and ask a boat operator to repeat it back. The answer comes without ceremony, followed by another request for a pickup point. You stay at the receiver. You have chosen to give up the source, but that choice does not release you from telling the truth about it or from answering the people still waiting.",
            "id": "Kamu memusnahkan sumber arsip sebelum mendekati mikrofon. Potongan suara asli dan audit bertanda tangan di modul ini tidak akan tersedia untuk dipulihkan pemeriksa. Sesaat kamu menunggu keyakinan bahwa harga yang dibayar sudah tepat. Keyakinan itu tidak datang. Kamu menjelaskan kepada kanal langsung apa yang dimusnahkan, termasuk bukti yang dapat digunakan untuk menguji kesaksianmu sendiri.\n\nLalu kamu menyampaikan urutan yang sudah diperiksa: perintah prioritas Arga, perpindahan klinik yang gagal, dan kepala antrean yang dipakai ulang sehingga permintaan tertunda tersembunyi. Kamu menjelaskan bahwa izin latihanmu tidak mencakup arahan langsung. Salinan terpisah dan saksi yang bersedia kini harus menopang pemeriksaan yang semestinya bisa dipastikan arsip asli. Sumber ini tak dapat dipakai ulang; kamu tidak mengaku telah menghapus semua kemungkinan salinan lain.\n\nTerakhir, kamu membaca nama penyelamatan dan posisi yang dikonfirmasi petugas. Sekali kamu membetulkan lokasi dengan suara keras, lalu meminta operator perahu mengulangnya. Jawabannya singkat, disusul permintaan titik penjemputan berikutnya. Kamu tetap menjaga radio. Kamu memilih melepaskan sumber, tetapi pilihan itu tidak menghapus kewajiban menjelaskan kebenarannya maupun menjawab orang yang masih menunggu."
          }
        },
        {
          "requires": {
            "protectedNames": true
          },
          "text": {
            "en": "You prepare the public copy with Lia beside you, checking what each removal would hide. Private addresses and personal handoffs come out; the time sequence and Arga's authorization stay visible. The original is sealed for review rather than rewritten to resemble a cleaner night. You announce those limits before sending, so nobody mistakes a protected copy for every piece of the record.\n\nThe transmission carries the sequence you verified and an explanation of how ECHO used your training voice without live permission. You tell reviewers how the full audit can be checked through controlled access and testimony from people willing to give it. Protecting an identity must not become a way of protecting the decision that harmed that person. Lia asks you to repeat that distinction, and you put it into words anyone listening can understand.\n\nThen you read the rescue names the callers agreed to share, keeping private details off the public band. You make a mistake in one location and correct it immediately. A boat crew confirms the change, then asks for the next pickup. You keep answering. The file is traveling beyond the tower now, but the people attached to it still need care that no transmission can provide by itself.",
            "id": "Kamu menyiapkan salinan umum bersama Lia, memeriksa apa yang akan tersembunyi oleh setiap penghapusan. Alamat pribadi dan perpindahan personal dikeluarkan; urutan waktu dan otorisasi Arga tetap terlihat. Berkas asli disegel untuk pemeriksaan, bukan ditulis ulang seolah malam ini lebih rapi. Sebelum mengirim, kamu menyebut batas-batas itu agar tak ada yang mengira salinan terlindungi adalah seluruh catatan.\n\nSiaran membawa urutan yang kamu verifikasi dan penjelasan tentang ECHO yang memakai suara latihanmu tanpa izin langsung. Kamu menjelaskan bagaimana pemeriksa bisa meninjau audit lengkap melalui akses terbatas dan kesaksian orang yang bersedia. Melindungi identitas tidak boleh menjadi cara melindungi keputusan yang merugikan orang itu. Lia memintamu mengulang perbedaannya, dan kamu menjelaskannya dengan bahasa yang mudah dipahami pendengar.\n\nLalu kamu membaca nama penyelamatan yang disetujui para penelepon, tanpa mengumumkan rincian pribadi. Satu lokasi terucap salah dan langsung kamu betulkan. Petugas perahu memastikan perubahan itu, lalu meminta titik penjemputan berikutnya. Kamu terus menjawab. Berkas kini bergerak keluar dari menara, tetapi orang-orang di dalamnya masih membutuhkan perhatian yang tidak bisa diberikan oleh siaran saja."
          }
        },
        {
          "requires": {
            "publishedFull": true
          },
          "text": {
            "en": "The complete raw archive leaves the tower. The signatures, timestamps, and private identities travel together; the priority order can now be checked against the original record rather than a summary prepared by the station. You explain the sequence you verified, including your limited training consent and the hidden requests. While you are speaking, the file is already becoming something you can no longer control.\n\nA caller asks whether their home address was in the transmission. You answer yes. There is a pause long enough for you to hear Lia put down her pencil. “I called for a way out,” the caller says. You cannot undo the release, and you do not try to make their worry sound unreasonable. You tell them what was included and admit that you made the decision without their permission.\n\nWhen you return to the rescue list, you include the cost of your own choice in the account. Exposing Arga's order has not made those private details harmless. You correct one location aloud and keep taking replies from the crews. The archive may help establish responsibility tomorrow. Tonight, the caller who asked about their address still deserves a clear answer from the person who sent it.",
            "id": "Seluruh arsip mentah meninggalkan menara. Tanda tangan, waktu, dan identitas pribadi terkirim bersama; perintah prioritas kini bisa dibandingkan dengan catatan asli, bukan ringkasan buatan stasiun. Kamu menjelaskan urutan yang sudah diperiksa, termasuk izin latihan yang terbatas dan permintaan yang tersembunyi. Saat kamu masih bicara, berkas itu sudah menjadi sesuatu yang tidak lagi bisa kamu kendalikan.\n\nSeorang penelepon bertanya apakah alamat rumahnya ikut disiarkan. Kamu menjawab ya. Jeda sesudahnya cukup panjang untuk mendengar Lia meletakkan pensil. “Saya menelepon karena ingin keluar,” kata orang itu. Kamu tidak bisa menarik kembali berkas, dan tidak berusaha membuat kekhawatirannya terdengar berlebihan. Kamu menyebut informasi yang terkirim dan mengakui telah mengambil keputusan tanpa izinnya.\n\nSaat kembali membaca daftar penyelamatan, kamu memasukkan akibat pilihanmu sendiri ke dalam penjelasan. Membongkar perintah Arga tidak membuat rincian pribadi itu aman. Kamu membetulkan satu lokasi dengan suara keras dan terus menerima jawaban petugas. Arsip mungkin membantu menetapkan tanggung jawab besok. Malam ini, penelepon yang menanyakan alamatnya tetap berhak mendapat jawaban jelas dari orang yang mengirimnya."
          }
        }
      ],
      "artAlt": {
        "en": "Live microphone sheltered under coat, handwritten rescue names and operator glove making one pencil correction.",
        "id": "Suara yang kamu pilih"
      }
    },
    "dawn-crossing": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "lia",
      "art": "empty",
      "artKey": "dawn-crossing",
      "location": {
        "en": "Inland road · 05:42",
        "id": "Jalan daratan · 05.42"
      },
      "text": {
        "en": "By the time the first bus stops on the inland road, the rain has thinned to a drizzle. Its driver has not slept; he checks the steps with a torch and tells everyone to take their time. Inside, the air smells of wet coats and instant coffee. A passenger moves a bag off the aisle seat before you have to ask. You sit down and discover how much effort standing had been taking.\n\nLia stays near the door, marking arrivals against the night list. The rescue boat reports on a separate channel so a bus headcount cannot accidentally close a search that is still underway. Whenever a report needs checking, she leaves its line open. You keep the receiver in your lap, ready to answer, but for a few minutes another operator takes the replies and tells you to drink something warm.\n\nA paper cup appears in your hands. You do not know who brought it, and there is no graceful speech waiting in you. “Thank you,” is all you manage. Nobody asks for more. Beyond the window, people are unloading blankets onto a dry stretch of road. Morning has brought somewhere to sit and work from; what it has not settled is written clearly enough for the next crew to pick up.",
        "id": "Ketika bus pertama berhenti di jalan daratan, hujan tinggal gerimis. Sopirnya belum tidur; ia memeriksa tangga dengan senter dan meminta semua orang naik perlahan. Di dalam, udara berbau mantel basah dan kopi instan. Seorang penumpang memindahkan tas dari kursi dekat lorong sebelum kamu meminta. Saat duduk, kamu baru merasakan betapa beratnya usaha untuk tetap berdiri tadi.\n\nLia berjaga dekat pintu, mencocokkan kedatangan dengan daftar malam. Perahu penyelamat melapor melalui kanal terpisah agar hitungan bus tidak tanpa sengaja menutup pencarian yang masih berlangsung. Laporan yang belum pasti tetap dibiarkan terbuka. Radio berada di pangkuanmu, siap dijawab, tetapi selama beberapa menit operator lain mengambil alih dan memintamu minum sesuatu yang hangat.\n\nSebuah gelas kertas diletakkan di tanganmu. Kamu tidak tahu siapa yang membawanya dan tidak punya tenaga untuk menyusun kalimat indah. “Terima kasih,” hanya itu yang keluar. Tak ada yang meminta lebih. Di balik jendela, orang-orang menurunkan selimut ke bagian jalan yang kering. Pagi memberi tempat untuk duduk dan melanjutkan pekerjaan; yang belum selesai sudah dicatat jelas agar petugas berikutnya bisa menanganinya."
      },
      "choices": [
        {
          "id": "read-morning",
          "label": {
            "en": "Read what the night leaves behind",
            "id": "Baca yang ditinggalkan malam"
          },
          "next": "aftermath"
        }
      ],
      "artAlt": {
        "en": "Early grey sunrise through bus window, wet coats and paper coffee cup, passengers exclusively from behind.",
        "id": "Jalan daratan · 05.42"
      }
    },
    "aftermath": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "aftermath",
      "location": {
        "en": "The morning ledger",
        "id": "Catatan pagi"
      },
      "text": {
        "en": "At the shelter desk, you begin a fresh log instead of copying the station's last summary. ECHO has been disconnected from live dispatch. The announcement used pieces of your training recordings, and Arga admitted authorizing the dock priority. His explanation for the failed clinic handoff belongs beside the reports of the people who were left waiting. The review will have to test the remaining documentary questions, not smooth them away.\n\nYour sister was never one of tonight's live callers. Nila died in the ferry accident; no file can turn an old recording into another chance to bring her home. Remembering her does not require you to make her part of this emergency. You leave room for that grief to be ordinary and unfinished, while keeping the rescue channel available to people who can still receive an answer.\n\nA new operator asks what should happen when a line goes quiet. You look at the empty space beside an unconfirmed report, then hand over the receiver. “Call again,” you say. “And if they don't answer, keep the question open for the next crew.” You write the instruction at the top of the fresh page. It is a small thing to leave behind, but everyone coming to this desk will be able to use it.",
        "id": "Di meja posko, kamu membuka catatan baru alih-alih menyalin ringkasan terakhir stasiun. ECHO sudah diputus dari arahan langsung. Siaran memakai potongan rekaman latihanmu, dan Arga mengakui mengizinkan prioritas dermaga. Penjelasannya tentang perpindahan klinik yang gagal harus dibaca bersama laporan warga yang dibiarkan menunggu. Pemeriksaan masih harus menguji pertanyaan dokumen yang tersisa, bukan merapikannya sampai hilang.\n\nAdikmu tidak pernah menjadi penelepon langsung malam ini. Nila meninggal dalam kecelakaan feri; tidak ada berkas yang bisa mengubah rekaman lama menjadi kesempatan membawanya pulang. Mengenangnya tidak mengharuskanmu memasukkannya ke dalam keadaan darurat ini. Kamu memberi ruang untuk duka yang biasa dan belum selesai, sambil menjaga kanal penyelamatan bagi orang yang masih bisa menerima jawaban.\n\nOperator baru bertanya apa yang harus dilakukan jika sambungan mendadak diam. Kamu menatap ruang kosong di samping laporan yang belum dikonfirmasi, lalu menyerahkan radio. “Hubungi lagi,” katamu. “Kalau belum menjawab, biarkan pertanyaannya terbuka untuk petugas berikutnya.” Kamu menulis arahan itu di bagian atas halaman baru. Peninggalan kecil, tetapi setiap orang yang datang ke meja ini bisa memakainya."
      },
      "choices": [
        {
          "id": "close-night",
          "label": {
            "en": "Turn the page into morning",
            "id": "Balik halaman menuju pagi"
          },
          "next": "final-ending"
        }
      ],
      "artAlt": {
        "en": "Fresh morning ledger and pencil on shelter table, unplugged archive cable beside an open battery radio.",
        "id": "Catatan pagi"
      }
    },
    "final-ending": {
      "type": "ending",
      "chapter": 3,
      "speaker": "system",
      "art": "empty",
      "artKey": "final-ending",
      "location": {
        "en": "Morning · your final record",
        "id": "Pagi · catatan terakhirmu"
      },
      "text": {
        "en": "The night has reached its final record. Read the rescue result alongside the account you sent, then see what became of the people whose calls you chose to answer.",
        "id": "Malam ini sampai pada catatan akhirnya. Baca hasil penyelamatan bersama penjelasan yang kamu kirim, lalu lihat kelanjutan orang-orang yang panggilannya kamu jawab."
      },
      "choices": [],
      "artAlt": {
        "en": "Golden first light over inland shelter road, empty operator coat over a chair and open handwritten rescue log.",
        "id": "Pagi · catatan terakhirmu"
      }
    },
    "bell-call": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "sari",
      "art": "empty",
      "artKey": "bell-call",
      "location": {
        "en": "Market upper landing",
        "id": "Pendaratan atas pasar"
      },
      "text": {
        "en": "Bu Sari's radio catches a dull brass note before her voice comes through. “The screens are dead, but the bell isn't,” she says. “Its rope has only decided to marry the shutter hook. Very inconvenient time for a wedding.” A neighbor is holding the radio while she stays on the market's upper landing, trying to find a safe way to free the snag.\n\nShe has kept the market for thirty years, long enough that the nearby houses know what its bell means in a storm. “People keep waiting for a screen to tell them they can move,” she says. “Some of them can't even turn the screen on.” If the bell works, she can give the street a signal everyone hears without sending anyone down into the water.\n\nYou ask her to leave the rope alone until you have checked the hook and the dry landing. She grumbles that she has survived worse advice, then agrees. Beneath the humor is somebody counting neighbors she cannot see from where she stands. You bring up the loft view and tell her you will guide the next step, rather than simply asking her to be careful.",
        "id": "Radio Bu Sari menangkap dentang kuningan redup sebelum suaranya terdengar. “Layar sudah mati, tapi lonceng belum,” katanya. “Talinya cuma memilih menikah dengan kait pintu. Waktu yang merepotkan buat hajatan.” Tetangga memegang radio sementara ia tetap di pendaratan atas pasar, mencari cara aman untuk melepaskan tali yang tersangkut.\n\nTiga puluh tahun ia menjaga pasar, cukup lama sampai rumah-rumah sekitar mengenali tanda lonceng saat badai. “Orang terus menunggu layar membolehkan mereka bergerak,” katanya. “Sebagian menyalakannya saja tidak bisa.” Jika lonceng kembali berbunyi, ia dapat memberi tanda yang terdengar ke seluruh jalan tanpa menyuruh siapa pun turun ke air.\n\nKamu memintanya membiarkan tali dulu sampai kait dan tempat berpijak yang kering diperiksa. Ia menggerutu bahwa nasihat lebih buruk pernah ia terima, lalu setuju. Di balik humornya ada seseorang yang menghitung tetangga yang tidak terlihat dari tempatnya berdiri. Kamu membuka tampilan loteng dan berjanji memandu langkah berikutnya, bukan sekadar menyuruhnya berhati-hati."
      },
      "choices": [
        {
          "id": "check-bell",
          "label": {
            "en": "Look for the snagged rope",
            "id": "Cari tali yang tersangkut"
          },
          "next": "bell-rope-scene"
        }
      ],
      "quest": "bell",
      "artAlt": {
        "en": "Market bell loft, older woman shown from rear in full head wrap and long raincoat holding neighbor radio.",
        "id": "Pendaratan atas pasar"
      }
    },
    "bell-rope-scene": {
      "type": "inspect",
      "chapter": 2,
      "speaker": "system",
      "art": "empty",
      "artKey": "bell-rope-scene",
      "location": {
        "en": "Bell loft",
        "id": "Loteng lonceng"
      },
      "text": {
        "en": "Inspect the shutter hook and upper landing. Find how the rope can be freed from above, then guide Bu Sari to the dry rail so she can ring the bell without entering the water.",
        "id": "Periksa kait pintu dan pendaratan atas. Cari cara melepas tali dari atas, lalu pandu Bu Sari ke pagar yang kering agar ia bisa membunyikan lonceng tanpa turun ke air."
      },
      "choices": [
        {
          "id": "free-bell",
          "label": {
            "en": "Tell Bu Sari the dry route",
            "id": "Beri tahu Bu Sari jalur yang kering"
          },
          "next": "bell-answer"
        }
      ],
      "quest": "bell",
      "completeFlag": "bellChecked",
      "requiredEvidence": [
        "bell-rope"
      ],
      "hotspots": [
        {
          "id": "hook",
          "title": {
            "en": "Shutter hook",
            "id": "Kait pintu"
          },
          "x": 30,
          "y": 55,
          "description": {
            "en": "The loose loop can be freed from above.",
            "id": "Simpul longgar bisa dilepas dari atas."
          },
          "evidence": "bell-rope"
        },
        {
          "id": "landing",
          "title": {
            "en": "Upper landing",
            "id": "Pendaratan atas"
          },
          "x": 70,
          "y": 60,
          "description": {
            "en": "The rope reaches the dry rail.",
            "id": "Tali mencapai pagar yang kering."
          },
          "evidence": null
        }
      ],
      "artAlt": {
        "en": "Close view of brass bell rope snagged on shutter hook, dry upper landing and wood grain.",
        "id": "Loteng lonceng"
      }
    },
    "bell-answer": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "sari",
      "art": "empty",
      "artKey": "bell-answer",
      "location": {
        "en": "A signal the street remembers",
        "id": "Tanda yang diingat jalan"
      },
      "text": {
        "en": "You talk Bu Sari through the dry approach, and the next sound on her line is clear enough to startle you: three rings carrying over the roofs. A torch answers from one window, then another. She counts them aloud, stopping when a house she knows remains dark. The bell has given people a way to reply, not proof that every person on the street is safe.\n\n“See? Nobody needed to remember a password,” she says, allowing herself a short laugh before calling the quiet houses by name. Her neighbor repeats the answering windows into the radio so you can keep a record. You hear the street becoming specific again: homes with people inside them, rather than a block the station might dismiss with one careless word.\n\nBu Sari says she will keep the bell ready for the tower crossing. It can carry a shared signal even if the screens and announcements fail. You thank her for staying on the dry landing, and she tells you to save the formal speech for daylight. “Keep the channel open,” she says. “I'll tell you which windows are still waiting.”",
        "id": "Kamu memandu Bu Sari melalui tempat yang kering, lalu bunyi berikutnya di kanal cukup jelas untuk membuatmu tersentak: tiga dentang melintasi atap. Senter menjawab dari satu jendela, lalu jendela lain. Ia menghitungnya lantang dan berhenti saat sebuah rumah yang ia kenal tetap gelap. Lonceng memberi warga cara menjawab, bukan bukti bahwa semua orang di jalan itu aman.\n\n“Lihat? Tak ada yang perlu ingat kata sandi,” katanya, tertawa sebentar sebelum memanggil rumah-rumah sunyi satu per satu. Tetangganya menyebut jendela yang menjawab melalui radio agar kamu bisa mencatat. Jalan itu kembali punya rincian: rumah dengan orang di dalamnya, bukan satu blok yang bisa dihapus stasiun dengan satu kata ceroboh.\n\nBu Sari akan menyiapkan lonceng untuk penyeberangan menara. Lonceng bisa membawa tanda bersama saat layar dan pengumuman gagal. Kamu berterima kasih karena ia tetap di tempat kering, tetapi ia menyuruhmu menyimpan pidato resmi sampai siang. “Biarkan kanalnya terbuka,” katanya. “Nanti saya bilang jendela mana yang masih menunggu.”"
      },
      "choices": [
        {
          "id": "bell-complete",
          "label": {
            "en": "Keep the neighborhood signal ready",
            "id": "Siapkan tanda warga"
          },
          "next": "storm-hub",
          "effects": {
            "quests": {
              "bell": "complete"
            },
            "flags": {
              "communityBell": true
            }
          }
        }
      ],
      "quest": "bell",
      "artAlt": {
        "en": "Brass market bell ringing against dawnless rooftops, torchlit windows answering across rain.",
        "id": "Tanda yang diingat jalan"
      }
    },
    "medicine-call": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "lia",
      "art": "empty",
      "artKey": "medicine-call",
      "location": {
        "en": "Clinic loading ramp",
        "id": "Ramp barang klinik"
      },
      "text": {
        "en": "Lia calls from the clinic's loading ramp, where the water has covered the route a delivery should have taken. A porter named Deni is holding a sealed cooler above the flood. “These supplies need to reach the hill shelter,” she tells you. “I'll handle the contents. What I need from you is a dry path we can actually follow.” She gives you time to write that down.\n\nDeni shifts the cooler and asks whether anything inside resembles cake. “He has been carrying it like a birthday present,” Lia explains. “I've told him twice. He remains hopeful.” You hear him insist that asking costs nothing. Their exchange is brief, but it gives you a sense of how long he has been standing there with tired arms, trying not to admit they are shaking.\n\nThe loading ramp will not do. The laundry passage may still connect uphill, and the cargo tag can confirm where the cooler belongs. You ask them to wait while you check both, leaving the seal for Lia to manage. There is no clever medical decision for you to make here. You need to get the right box to the right hands without sending its carrier back into danger.",
        "id": "Lia menelepon dari ramp barang klinik, tempat air menutupi jalur yang seharusnya dilalui kiriman. Deni, petugas angkutnya, mengangkat kotak pendingin tersegel di atas banjir. “Persediaan ini harus sampai ke posko bukit,” katanya. “Isinya akan saya tangani. Saya butuh jalur kering yang benar-benar bisa kami lalui.” Ia memberimu waktu untuk mencatat.\n\nDeni menggeser kotak dan bertanya apakah ada isinya yang mirip kue. “Dia membawanya seperti hadiah ulang tahun,” jelas Lia. “Sudah dua kali saya bilang. Harapannya belum padam.” Kamu mendengar Deni bersikeras bahwa bertanya tidak bayar. Percakapan singkat itu membuatmu membayangkan lamanya ia berdiri dengan lengan lelah, mencoba tidak mengaku bahwa tangannya mulai gemetar.\n\nRamp barang tidak bisa dipakai. Lorong laundry mungkin masih tersambung ke bukit, dan label titipan dapat memastikan tujuan kotak. Kamu meminta mereka menunggu sementara keduanya diperiksa, membiarkan Lia mengurus segelnya. Tak ada keputusan medis rumit yang perlu kamu buat di sini. Tugasmu membawa kotak yang tepat ke tangan yang tepat tanpa mengirim pembawanya kembali ke bahaya."
      },
      "choices": [
        {
          "id": "check-cargo",
          "label": {
            "en": "Check the cargo route tag",
            "id": "Periksa label rute titipan"
          },
          "next": "medicine-route"
        }
      ],
      "quest": "medicine",
      "artAlt": {
        "en": "Blue hooded medic from behind and porter fully covered by hood carrying sealed cooler above flooded loading ramp.",
        "id": "Ramp barang klinik"
      }
    },
    "medicine-route": {
      "type": "inspect",
      "chapter": 2,
      "speaker": "system",
      "art": "empty",
      "artKey": "medicine-route",
      "location": {
        "en": "Laundry passage route",
        "id": "Rute jalur laundry"
      },
      "text": {
        "en": "Inspect the sealed cargo tag to confirm the hill shelter destination, then check the laundry arrow for the uphill route. Keep the cooler sealed; Lia will handle its contents after delivery.",
        "id": "Periksa label titipan tersegel untuk memastikan tujuan posko bukit, lalu lihat panah laundry menuju jalur naik. Biarkan kotak tetap tersegel; Lia akan menangani isinya setelah sampai."
      },
      "choices": [
        {
          "id": "guide-cargo",
          "label": {
            "en": "Guide Deni through the laundry passage",
            "id": "Pandu Deni melalui lorong laundry"
          },
          "next": "medicine-delivery"
        }
      ],
      "quest": "medicine",
      "completeFlag": "cargoChecked",
      "requiredEvidence": [
        "cargo-tag"
      ],
      "hotspots": [
        {
          "id": "tag",
          "title": {
            "en": "Cargo tag",
            "id": "Label titipan"
          },
          "x": 35,
          "y": 73,
          "description": {
            "en": "Hill shelter clinic. Keep sealed.",
            "id": "Klinik posko bukit. Tetap tersegel."
          },
          "evidence": "cargo-tag"
        },
        {
          "id": "sign",
          "title": {
            "en": "Laundry arrow",
            "id": "Panah laundry"
          },
          "x": 75,
          "y": 32,
          "description": {
            "en": "The uphill passage avoids the ramp.",
            "id": "Lorong naik menghindari ramp."
          },
          "evidence": null
        }
      ],
      "artAlt": {
        "en": "Cargo tag on sealed cooler beside laundry passage arrow, tiled dry uphill corridor beyond.",
        "id": "Rute jalur laundry"
      }
    },
    "medicine-delivery": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "lia",
      "art": "empty",
      "artKey": "medicine-delivery",
      "location": {
        "en": "Hill shelter doorway",
        "id": "Pintu posko bukit"
      },
      "text": {
        "en": "You guide Deni past the flooded ramp and through the laundry passage, asking him to repeat each turn before taking it. When Lia calls from the shelter doorway, her first word is “Delivered.” Then you hear the cooler being set down, carefully, and Deni asking whether successful delivery changes the situation with the cake. “It earns you a chair,” she says. “We're starting small.”\n\nThe shelter clinic checks the seal and accepts the supplies. Lia tells you that more people can now be treated here instead of making another journey toward the flood. She does not offer a miraculous count of lives saved. She gives you something clearer: a delivery received, a carrier resting, and one less reason to send frightened people back down the road.\n\nYou start to say it was only a route check, but Lia interrupts gently. “I know it looked like a box. Deni still had to get it here.” You leave the supplies in her care and keep the passage in your record. For once, a completed entry means exactly what it says. Someone at the other end has confirmed it, and the next call does not need to undo it.",
        "id": "Kamu memandu Deni melewati ramp yang tergenang dan melalui lorong laundry, memintanya mengulang setiap belokan sebelum melangkah. Saat Lia memanggil dari pintu posko, kata pertamanya adalah “Sampai.” Lalu terdengar kotak diletakkan hati-hati dan Deni bertanya apakah keberhasilan kiriman mengubah urusan kue. “Kamu dapat kursi,” katanya. “Kita mulai dari yang kecil.”\n\nKlinik posko memeriksa segel lalu menerima persediaan. Lia menjelaskan bahwa lebih banyak orang kini bisa dirawat di sini, tanpa menempuh perjalanan lagi ke arah banjir. Ia tidak menawarkan angka ajaib tentang nyawa yang diselamatkan. Ia memberi kepastian lebih jelas: kiriman diterima, pembawanya beristirahat, dan satu alasan lebih sedikit untuk menyuruh warga ketakutan turun kembali.\n\nKamu hendak bilang bahwa tadi hanya pemeriksaan rute, tetapi Lia menyela dengan lembut. “Saya tahu bentuknya cuma kotak. Deni tetap harus membawanya sampai sini.” Kamu menyerahkan persediaan ke tangannya dan menyimpan jalur dalam catatan. Kali ini status selesai berarti persis seperti yang tertulis. Orang di ujung lain sudah memastikannya, dan panggilan berikutnya tidak perlu membatalkannya."
      },
      "choices": [
        {
          "id": "cargo-complete",
          "label": {
            "en": "Leave the cargo in Lia’s care",
            "id": "Serahkan titipan kepada Lia"
          },
          "next": "storm-hub",
          "effects": {
            "quests": {
              "medicine": "complete"
            },
            "flags": {
              "medicineDelivered": true
            },
            "trust": {
              "mara": 1
            }
          }
        }
      ],
      "quest": "medicine",
      "artAlt": {
        "en": "Sealed clinic cooler on hill-shelter intake counter, blue hooded medic back and empty waiting chair.",
        "id": "Pintu posko bukit"
      }
    },
    "letter-open": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "letter-open",
      "location": {
        "en": "Private message · NILA",
        "id": "Pesan pribadi · NILA"
      },
      "text": {
        "en": "Nila's name appears in the service inbox, and your hand stops above the controls. For one unreasonable second you expect to hear her asking why you have taken so long to answer. Then the date brings you back. Your sister died in the ferry accident. This file is older than tonight, and however much you want it to be a new call, you know it cannot be one.\n\nThe note identifies a backup from the ferry terminal's lost-phone desk. Salim kept it outside the training archive, among private messages to be returned to their owners. ECHO has not turned her into a caller. You check that distinction twice anyway. After hearing your own voice used without you, even a familiar name needs somewhere safe to belong.\n\nThe file waits for you to press play. You have spent so much time asking strangers to stay on the line that you do not know how to sit with a message that asks nothing urgent of you. Nobody will be rescued by decoding it. Nobody needs you to make it evidence. For a moment you are simply someone who has been given another chance to hear a sister's voice.",
        "id": "Nama Nila muncul di kotak pesan servis, dan tanganmu berhenti di atas tombol. Selama satu detik yang tak masuk akal, kamu berharap mendengar ia bertanya mengapa kamu lama menjawab. Lalu tanggal berkas membawamu kembali. Adikmu meninggal dalam kecelakaan feri. Berkas ini lebih tua daripada malam ini, dan sekeras apa pun keinginanmu, ini tidak mungkin panggilan baru.\n\nCatatannya menjelaskan bahwa ini cadangan dari meja ponsel hilang terminal feri. Salim menyimpannya di luar arsip latihan, bersama pesan pribadi untuk dikembalikan kepada pemiliknya. ECHO tidak mengubah Nila menjadi penelepon. Kamu tetap memastikan perbedaan itu dua kali. Sesudah suaramu sendiri dipakai tanpa dirimu, bahkan nama yang akrab perlu memiliki tempat yang aman.\n\nBerkas menunggu tombol putar ditekan. Kamu terlalu lama meminta orang asing bertahan di kanal sampai tidak tahu cara duduk bersama pesan yang tidak meminta tindakan mendesak. Tak ada orang yang akan diselamatkan dengan memecahkan isinya. Tak ada yang memintamu menjadikannya bukti. Untuk sesaat kamu hanya seseorang yang mendapat kesempatan lain mendengar suara adiknya."
      },
      "choices": [
        {
          "id": "play-nila",
          "label": {
            "en": "Play her private message",
            "id": "Putar pesan pribadinya"
          },
          "next": "letter-listen",
          "effects": {
            "evidence": [
              "nila-message"
            ]
          }
        }
      ],
      "quest": "letter",
      "artAlt": {
        "en": "Private old memory card labeled Nila beside rain-dappled service inbox, operator sleeve paused nearby.",
        "id": "Pesan pribadi · NILA"
      }
    },
    "letter-listen": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "letter-listen",
      "location": {
        "en": "A breakfast never ordered",
        "id": "Sarapan yang tak pernah dipesan"
      },
      "text": {
        "en": "“Don't make your sad face at me,” Nila says. “I owe you breakfast. If the ferry's late, order mine anyway.” Her laugh comes afterward, familiar enough that you wait for another sentence even when the recording ends. There is no warning hidden inside it. She was planning a meal, assuming there would be time to make good on a small promise, and teasing you because that was what she did.\n\nYou remember being annoyed that she had borrowed your charger. You had been saving your phone's battery and she had been certain yours would last. The memory arrives with its ordinary irritation still attached, before the accident could make every detail feel sacred. It is a relief to remember that you were allowed to be impatient with her, and that she was allowed to laugh at you.\n\nThe room returns slowly: the wet sleeve against the desk, the receiver still carrying other people's calls. Grief has made you revisit the terrible day so often that you sometimes forget how much life came before it. This little file does not change what happened. It lets you hear, for a moment, a morning in which your sister expected to be hungry and expected you to be there.",
        "id": "“Jangan pasang muka sedih begitu,” kata Nila. “Aku masih utang sarapan. Kalau ferinya telat, pesankan punyaku juga.” Tawanya menyusul, begitu akrab sampai kamu menunggu kalimat lain meski rekaman berakhir. Tidak ada peringatan tersembunyi. Ia sedang merencanakan makan, mengira masih ada waktu menepati janji kecil, dan menggodamu karena begitulah kebiasaannya.\n\nKamu ingat kesal karena ia meminjam pengisi dayamu. Kamu sedang menghemat baterai ponsel, sementara ia yakin punyamu masih akan bertahan. Kenangan itu datang dengan kekesalan biasa yang masih melekat, sebelum kecelakaan membuat setiap rincian terasa suci. Melegakan bisa mengingat bahwa kamu boleh tidak sabar kepadanya, dan ia boleh menertawakanmu.\n\nRuangan kembali perlahan: lengan mantel basah menyentuh meja, radio masih membawa panggilan orang lain. Duka membuatmu terlalu sering mengulang hari buruk itu sampai terkadang lupa betapa banyak kehidupan sebelumnya. Berkas kecil ini tidak mengubah kejadian. Sesaat, kamu bisa mendengar sebuah pagi ketika adikmu berharap akan lapar dan berharap kamu ada di sana."
      },
      "choices": [
        {
          "id": "choose-memory",
          "label": {
            "en": "Choose what this memory is for",
            "id": "Pilih tempat untuk kenangan ini"
          },
          "next": "letter-answer"
        }
      ],
      "quest": "letter",
      "artAlt": {
        "en": "Memory image of two breakfast cups at ferry-terminal stall, empty chairs and folded charger cable, no people.",
        "id": "Sarapan yang tak pernah dipesan"
      }
    },
    "letter-answer": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "letter-answer",
      "location": {
        "en": "A memory without an assignment",
        "id": "Kenangan tanpa tugas"
      },
      "text": {
        "en": "You let the file finish without playing it again immediately. There will be another time for that, you tell yourself, surprised by how much you need to believe it. The private recording is yours to keep. Hearing it during an emergency does not give the station a right to use it, and loving Nila does not oblige you to turn her laugh into something useful for strangers.\n\nIf you want, you can tell the channel her breakfast joke in your own words: a small reminder that people still make plans for ordinary mornings. You can also keep the moment entirely to yourself. Neither choice sends her recording onto the open band. After everything you have learned about permission tonight, the difference matters even here, where the voice means so much to you.\n\nA live call reaches the receiver, and you lift your hand toward it. Nila does not have to become the reason everyone else is saved. She can remain your sister, with a borrowed charger and a breakfast debt you never collected. You put the file somewhere you can find it again, then decide whether to share the joke before returning to the person who is waiting now.",
        "id": "Kamu membiarkan berkas selesai tanpa langsung memutarnya lagi. Nanti masih ada waktu, katamu kepada diri sendiri, terkejut oleh betapa kamu perlu mempercayai itu. Rekaman pribadi ini boleh kamu simpan. Mendengarnya saat darurat tidak memberi stasiun hak memakainya, dan mencintai Nila tidak mewajibkanmu mengubah tawanya menjadi sesuatu yang berguna bagi orang asing.\n\nKalau mau, kamu bisa menceritakan lelucon sarapannya kepada kanal dengan kata-katamu: pengingat kecil bahwa orang masih merencanakan pagi biasa. Kamu juga boleh menyimpan momen ini sepenuhnya untuk dirimu. Kedua pilihan tidak mengirim rekamannya ke kanal terbuka. Sesudah semua yang kamu pelajari tentang izin malam ini, perbedaan itu tetap penting bahkan untuk suara yang begitu berarti bagimu.\n\nPanggilan langsung masuk ke radio, dan kamu mengangkat tangan untuk menjawab. Nila tidak harus menjadi alasan semua orang lain terselamatkan. Ia boleh tetap menjadi adikmu, dengan pengisi daya pinjaman dan utang sarapan yang tidak sempat kamu tagih. Kamu menyimpan berkas agar bisa ditemukan lagi, lalu memilih apakah akan berbagi lelucon sebelum kembali kepada orang yang kini menunggu."
      },
      "choices": [
        {
          "id": "memory-private",
          "label": {
            "en": "Keep the laugh for yourself",
            "id": "Simpan tawanya untuk dirimu"
          },
          "next": "channel-hub",
          "effects": {
            "quests": {
              "letter": "complete"
            },
            "flags": {
              "memoryKept": true,
              "memoryShared": false
            }
          }
        },
        {
          "id": "memory-shared",
          "label": {
            "en": "Tell her breakfast joke in your own words",
            "id": "Ceritakan lelucon sarapannya dengan kata-katamu"
          },
          "next": "channel-hub",
          "effects": {
            "quests": {
              "letter": "complete"
            },
            "flags": {
              "memoryShared": true,
              "memoryKept": false
            }
          }
        }
      ],
      "quest": "letter",
      "artAlt": {
        "en": "Single private recording cassette tucked inside operator coat pocket, breakfast receipt held in hand.",
        "id": "Kenangan tanpa tugas"
      }
    },
    "witness-call": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "salim",
      "art": "empty",
      "artKey": "witness-call",
      "location": {
        "en": "Old pump house roof",
        "id": "Atap rumah pompa lama"
      },
      "text": {
        "en": "Salim's voice reaches you from the old pump house roof. “My chair was empty because the stair was locked,” he says. “I went out with the manual key. I should have left you more than a cold mug.” He explains that he copied Arga's order before leaving, then lost his way back when the water rose. His absence had a reason; the silence he left you still needs an apology.\n\nHis grey coat has caught on a nail, and you hear the fabric tug while he tries to settle where the roof is dry. “I taught you to leave a clean log,” he says. “Then I left you to work out my mess.” He does not ask you to excuse it because he meant well. He tells you his location carefully, waits while you repeat it, and agrees to stay above the water.\n\nYou can arrange help while hearing what he saw. The copied order may support the archive, but you do not need him to prove anything before deserving a pickup. You tell him that first. His next breath sounds less hurried. Then he asks you to listen closely, because the failed clinic transfer did not disappear by itself, and he was there when its place in the queue changed.",
        "id": "Suara Salim terdengar dari atap rumah pompa lama. “Kursi saya kosong karena tangganya terkunci,” katanya. “Saya keluar membawa kunci manual. Seharusnya saya meninggalkan lebih dari cangkir dingin untukmu.” Ia menyalin perintah Arga sebelum pergi, lalu air naik dan menutup jalan kembali. Ketidakhadirannya punya alasan; diam yang ia tinggalkan tetap membutuhkan permintaan maaf.\n\nMantel abu-abunya tersangkut paku, dan terdengar kain tertarik saat ia mencari tempat kering di atap. “Saya mengajarimu membuat catatan rapi,” katanya. “Lalu saya membiarkanmu membereskan kekacauan saya.” Ia tidak meminta dimaklumi karena niatnya baik. Ia menyebut lokasi dengan teliti, menunggu kamu mengulangnya, lalu setuju tetap di atas air.\n\nKamu bisa mengatur bantuan sambil mendengar kesaksiannya. Salinan perintah mungkin mendukung arsip, tetapi ia tidak perlu membuktikan apa pun agar pantas dijemput. Kamu mengatakan itu lebih dulu. Napas berikutnya terdengar tidak terburu-buru. Lalu ia memintamu mendengarkan baik-baik: transfer klinik yang gagal tidak hilang sendiri, dan ia ada saat tempatnya dalam antrean berubah."
      },
      "choices": [
        {
          "id": "hear-salim",
          "label": {
            "en": "“Stay on the roof. Tell me what you saw.”",
            "id": "“Tetap di atap. Ceritakan yang kamu lihat.”"
          },
          "next": "witness-proof",
          "effects": {
            "evidence": [
              "salim-statement"
            ]
          }
        }
      ],
      "quest": "witness",
      "artAlt": {
        "en": "Grey raincoat senior operator from behind on pump house roof, coat hem snagged on nail, signal lamp.",
        "id": "Atap rumah pompa lama"
      }
    },
    "witness-proof": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "salim",
      "art": "empty",
      "artKey": "witness-proof",
      "location": {
        "en": "A willing witness",
        "id": "Saksi yang bersedia"
      },
      "text": {
        "en": "“The clinic transfer failed,” Salim says. “I told Arga. He approved the header reset anyway, and I watched those requests disappear.” He keeps to what he witnessed, correcting himself when you ask which page carried the approval. You write down his account beside the copied order. It is willing testimony, not a substitute for checking the documents that can support it.\n\nHe is prepared to give a written statement to a reviewer. Then he asks what else is in the raw audit. His home address appears among the staff details, and his family is there. “Use what I saw,” he says. “Don't send people to my front door.” It is an ordinary request, made while he is waiting to be rescued, and you cannot treat the waiting as consent.\n\nYou tell him that a pickup and a statement can be arranged without broadcasting his address. He agrees to testify on that basis. The distinction belongs in your record as carefully as any timestamp: what he is willing to say, and what he has not allowed you to share. After hearing your own borrowed voice, you have no excuse for letting a file answer that question on his behalf.",
        "id": "“Transfer klinik gagal,” kata Salim. “Saya memberi tahu Arga. Ia tetap menyetujui perubahan waktu, dan saya melihat permintaan itu menghilang.” Ia tetap pada yang disaksikan, memperbaiki penjelasan saat kamu bertanya halaman mana memuat izin. Kamu mencatat keterangannya di samping salinan perintah. Ini kesaksian sukarela, bukan pengganti pemeriksaan dokumen yang mendukungnya.\n\nIa bersedia memberi kesaksian tertulis kepada pemeriksa. Lalu ia bertanya apa lagi yang ada dalam audit mentah. Alamat rumahnya tercantum dalam rincian staf, dan keluarganya ada di sana. “Pakai yang saya lihat,” katanya. “Jangan arahkan orang ke pintu rumah saya.” Permintaan itu wajar meski ia sedang menunggu diselamatkan, dan keadaan menunggu bukan persetujuan.\n\nKamu menjelaskan bahwa jemputan serta kesaksian bisa diatur tanpa menyiarkan alamatnya. Ia setuju bersaksi dengan ketentuan itu. Perbedaannya perlu dicatat seteliti waktu kejadian: apa yang bersedia ia sampaikan dan apa yang tidak diizinkan untuk dibagikan. Sesudah mendengar suaramu sendiri dipinjam, kamu tak punya alasan membiarkan berkas menjawab pertanyaan tersebut atas namanya."
      },
      "choices": [
        {
          "id": "witness-route",
          "label": {
            "en": "Arrange his roof pickup and written testimony",
            "id": "Atur jemputan atap dan kesaksian tertulis"
          },
          "next": "witness-return",
          "effects": {
            "flags": {
              "witnessConsent": true,
              "signedTestimony": true
            }
          }
        }
      ],
      "quest": "witness",
      "artAlt": {
        "en": "Voluntary handwritten witness statement beside signed routing copy, grey gloved hand covering private address.",
        "id": "Saksi yang bersedia"
      }
    },
    "witness-return": {
      "type": "dialogue",
      "chapter": 2,
      "speaker": "salim",
      "art": "empty",
      "artKey": "witness-return",
      "location": {
        "en": "Pump house pickup confirmed",
        "id": "Jemputan rumah pompa dikonfirmasi"
      },
      "text": {
        "en": "A rescue boat spots Salim's lamp and calls up to the roof. You keep his line open until the pilot confirms the pickup. Salim wraps the copied order in the plastic from his lunch before handing it down. “Terrible sandwich,” he tells you. “Excellent packaging.” The pilot laughs, and for the first time his channel carries a sound that is not being broken apart by rain or fear.\n\nHis written statement can go to a reviewer without the raw address attached. You save that permission with the account, remembering that tonight's rescue does not settle what you might later choose to publish. Salim has offered you evidence and asked you to protect a particular part of his life. The fact that he is leaving the roof cannot make either part of that agreement disappear.\n\n“Leave my chair empty,” he says as the boat moves away. “You don't need to wait for me to tell you what to do.” You almost answer that you would have preferred that advice before the shift began. He seems to hear it anyway, and apologizes once more. You thank the pilot, confirm Salim's arrival route, and return to the station's other unanswered lines.",
        "id": "Perahu penyelamat melihat lampu Salim dan memanggil ke atap. Kamu membiarkan kanalnya terbuka sampai pengemudi memastikan jemputan. Salim membungkus salinan perintah dengan plastik bekal sebelum menyerahkannya. “Rotinya buruk,” katanya. “Bungkusnya luar biasa.” Pengemudi tertawa, dan untuk pertama kali kanalnya membawa suara yang tidak dipecah oleh hujan atau ketakutan.\n\nKesaksian tertulis bisa diberikan kepada pemeriksa tanpa alamat mentah terlampir. Kamu menyimpan izin bersama keterangannya, ingat bahwa penyelamatan malam ini tidak menentukan pilihan publikasi nanti. Salim menawarkan bukti dan meminta bagian tertentu dari hidupnya dilindungi. Keberhasilannya meninggalkan atap tidak boleh membuat salah satu bagian persetujuan itu menghilang.\n\n“Biarkan kursi saya kosong,” katanya saat perahu bergerak. “Kamu tidak perlu menunggu saya untuk tahu harus bertindak apa.” Kamu hampir menjawab bahwa nasihat itu lebih berguna sebelum sif dimulai. Ia seperti mendengarnya dan meminta maaf sekali lagi. Kamu berterima kasih kepada pengemudi, memastikan rute tujuan Salim, lalu kembali ke panggilan stasiun yang belum dijawab."
      },
      "choices": [
        {
          "id": "witness-complete",
          "label": {
            "en": "Save Salim’s voluntary statement",
            "id": "Simpan kesaksian sukarela Salim"
          },
          "next": "channel-hub",
          "effects": {
            "quests": {
              "witness": "complete"
            },
            "flags": {
              "witnessSafe": true,
              "signedTestimony": true
            }
          }
        }
      ],
      "quest": "witness",
      "artAlt": {
        "en": "Pump house roof pickup, rescue boat below and grey coated operator descending from behind with wrapped lunch package.",
        "id": "Jemputan rumah pompa dikonfirmasi"
      }
    },
    "dog-bark": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "dog-bark",
      "location": {
        "en": "Flare beneath the landing",
        "id": "Suar di bawah pendaratan"
      },
      "text": {
        "en": "The barking comes from a narrow service ledge below the landing. Your lamp finds a small dog pressed against the wall, determined to look as though he chose to be there. His collar tag reads BISCUIT. Above him, a gate worker has stopped on the maintenance ladder. “He won't climb on his own,” the worker calls. “I've tried explaining that the weather is terrible. He seems to agree without changing his plans.”\n\nYou ask whether the worker can reach him safely. There is a dry upper rung that gives access to the ledge, but rain keeps swallowing the edges of the route. The worker can make the lift if you hold the lamp steady and check where the ladder leads. Biscuit gives another offended bark. “Yes, I know,” the worker tells him. “You had a much better bed this morning.”\n\nFor a moment, the task is simple enough to grasp: one lamp, one route, one passenger who cannot understand the instructions. You tell the worker you will keep the light where it is needed, then inspect the flare and upper rung before anyone moves. There are plenty of reasons to hurry past this landing. None of them make the little dog below it less dependent on the person who has stayed.",
        "id": "Gonggongan datang dari tepian servis sempit di bawah pendaratan. Lampumu menemukan anjing kecil merapat ke dinding, seolah bersikeras ia sendiri yang memilih berada di sana. Kalungnya bertuliskan BISCUIT. Di atasnya, petugas gerbang berhenti pada tangga perawatan. “Dia tidak mau naik sendiri,” seru petugas itu. “Sudah saya jelaskan cuacanya buruk. Sepertinya setuju, tapi rencananya tidak berubah.”\n\nKamu bertanya apakah petugas bisa menjangkaunya dengan aman. Ada pijakan atas yang kering dan cukup dekat dengan tepian, tetapi hujan terus mengaburkan batas jalurnya. Ia bisa mengangkat Biscuit jika lampumu tetap mengarah ke sana dan tujuan tangga diperiksa. Biscuit menggonggong lagi, kesal. “Iya, saya tahu,” kata petugas kepadanya. “Tempat tidurmu tadi pagi jauh lebih nyaman.”\n\nSesaat, pekerjaan ini cukup sederhana untuk dipahami: satu lampu, satu jalur, satu penumpang yang tidak memahami arahan. Kamu berjanji menjaga cahaya tetap pada tempat yang diperlukan, lalu memeriksa suar dan pijakan atas sebelum siapa pun bergerak. Banyak alasan untuk buru-buru meninggalkan pendaratan ini. Tak satu pun mengurangi kebutuhan anjing kecil itu kepada orang yang tetap menemaninya."
      },
      "choices": [
        {
          "id": "mark-dog-route",
          "label": {
            "en": "Inspect the ladder and keep the lamp steady",
            "id": "Periksa tangga dan tahan cahaya lampu"
          },
          "next": "dog-ladder"
        }
      ],
      "quest": "dog",
      "artAlt": {
        "en": "Small sandy dog on narrow service ledge below route flare, fully covered gate worker seen from rear above ladder.",
        "id": "Suar di bawah pendaratan"
      }
    },
    "dog-ladder": {
      "type": "inspect",
      "chapter": 3,
      "speaker": "system",
      "art": "empty",
      "artKey": "dog-ladder",
      "location": {
        "en": "Marked maintenance ladder",
        "id": "Tangga perawatan bertanda"
      },
      "text": {
        "en": "Check the route flare and dry upper rung. The gate worker needs a clear path down to Biscuit and back to the tower stair; keep your lamp on that path while the worker makes the lift.",
        "id": "Periksa suar rute dan pijakan atas yang kering. Petugas perlu jalur jelas menuju Biscuit lalu kembali ke tangga menara; arahkan lampumu ke jalur itu saat ia mengangkatnya."
      },
      "choices": [
        {
          "id": "lift-dog",
          "label": {
            "en": "Keep the marked route lit",
            "id": "Tetap sorot rute bertanda"
          },
          "next": "dog-home"
        }
      ],
      "quest": "dog",
      "completeFlag": "dogRouteChecked",
      "requiredEvidence": [
        "route-flare"
      ],
      "hotspots": [
        {
          "id": "flare",
          "title": {
            "en": "Route flare",
            "id": "Suar rute"
          },
          "x": 28,
          "y": 71,
          "description": {
            "en": "The ladder leads to the upper tower stair.",
            "id": "Tangga menuju tangga atas menara."
          },
          "evidence": "route-flare"
        },
        {
          "id": "rung",
          "title": {
            "en": "Dry upper rung",
            "id": "Pijakan atas kering"
          },
          "x": 71,
          "y": 35,
          "description": {
            "en": "The worker can reach the ledge from here.",
            "id": "Petugas bisa mencapai tepi dari sini."
          },
          "evidence": null
        }
      ],
      "artAlt": {
        "en": "Maintenance ladder leading from flooded ledge to upper tower stair, glowing flare and dry rung markers.",
        "id": "Tangga perawatan bertanda"
      }
    },
    "dog-home": {
      "type": "dialogue",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "dog-home",
      "location": {
        "en": "One more on the headcount",
        "id": "Satu lagi dalam hitungan"
      },
      "text": {
        "en": "Biscuit arrives on the landing wrapped inside the gate worker's raincoat. He stays still until your lamp catches the bundle, then sneezes with such force that the worker nearly laughs themselves off balance. “Complaint received,” you tell him. The dog settles against the coat as if your apology is the least he deserves. You wait until the worker has both feet on the concrete before lowering the light.\n\nThe route you checked reaches the upper tower stair. The worker marks the ladder clearly for the next group, making sure the flare can be seen from below. What began as a way to collect one stranded dog has given you another path people can follow in the rain. You call the details to Lia rather than assuming somebody else will notice the marker. She asks you to repeat the landing it connects to.\n\nWhen the route is on her board, Lia asks about the extra passenger. “Biscuit,” you say. “No surname supplied.” She takes a moment to make a space for him. “Put him under B. We'll deal with his paperwork after breakfast.” The worker pulls the coat closer around him. You add the dog and the ladder to the rescue board, then return to the calls waiting at the landing.",
        "id": "Biscuit tiba di pendaratan, terbungkus jas hujan petugas gerbang. Ia diam sampai lampumu menyinari bungkusan itu, lalu bersin begitu keras hingga petugas hampir kehilangan keseimbangan karena tertawa. “Keluhannya sudah diterima,” katamu. Anjing itu kembali bersandar pada jas, seolah permintaan maafmu memang sudah sewajarnya. Kamu menunggu kedua kaki petugas menapak beton sebelum menurunkan cahaya.\n\nJalur yang diperiksa tadi mencapai tangga atas menara. Petugas menandainya dengan jelas untuk rombongan berikutnya, memastikan suar terlihat dari bawah. Jalan yang awalnya dipakai mengambil seekor anjing terjebak kini memberi warga jalur lain di tengah hujan. Kamu menyampaikan rinciannya kepada Lia, tidak menganggap orang lain pasti melihat penandanya. Ia memintamu mengulang pendaratan yang terhubung dengannya.\n\nSesudah rute masuk ke papan, Lia menanyakan penumpang tambahan itu. “Biscuit,” katamu. “Nama belakang belum diberikan.” Ia mencari ruang untuk mencatatnya. “Tulis di bawah B. Urusan administrasinya sesudah sarapan.” Petugas merapatkan jas di sekeliling anjing itu. Kamu menambahkan Biscuit dan tangga ke papan penyelamatan, lalu kembali kepada panggilan yang menunggu di pendaratan."
      },
      "choices": [
        {
          "id": "dog-complete",
          "label": {
            "en": "Add Biscuit and the ladder to the rescue board",
            "id": "Tambahkan Biscuit dan tangga ke papan"
          },
          "next": "final-hub",
          "effects": {
            "quests": {
              "dog": "complete"
            },
            "flags": {
              "dogSaved": true,
              "flaredRoute": true
            }
          }
        }
      ],
      "quest": "dog",
      "artAlt": {
        "en": "Sandy dog wrapped in open raincoat on upper landing, boots and lamp nearby, gate worker head outside frame.",
        "id": "Satu lagi dalam hitungan"
      }
    },
    "encounter-window": {
      "type": "random",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "encounter-window",
      "location": {
        "en": "Neighborhood channel · windows",
        "id": "Kanal warga · jendela"
      },
      "text": {
        "en": "A voice breaks through on the neighborhood channel while you watch the lit windows beyond the station. You keep the line open and ask where the caller is waiting, before deciding what help you can offer.",
        "id": "Suara masuk melalui kanal warga saat kamu mengamati jendela bercahaya di luar stasiun. Kamu membiarkan kanal terbuka dan menanyakan tempat penelepon menunggu, sebelum memilih bantuan yang bisa diberikan."
      },
      "choices": [],
      "encounters": [
        {
          "id": "encounter-window-1",
          "text": {
            "en": "A child asks whether the sea can climb stairs. Her father whispers for you to tell her no, but you hear them moving toward an upstairs window, carrying a lamp between them. He wants a sentence that will stop her being frightened. You want to give them something they can use even if the water rises again. Neither wish is difficult to understand.\n\nYou ask whether the lamp is working, and the child answers before her father can. “It still has some left.” The boat crews are checking lit windows, but you cannot promise when one will reach theirs. You can guide her to hold the light where it can be seen, or explain what the crew is doing without pretending the danger has gone. She stays on the line, waiting for your answer.",
            "id": "Seorang anak bertanya apakah laut bisa naik tangga. Ayahnya berbisik agar kamu bilang tidak, tetapi kamu mendengar mereka menuju jendela atas dengan sebuah lampu. Ia ingin kalimat yang membuat anaknya tidak takut lagi. Kamu ingin memberi sesuatu yang bisa dipakai meski air kembali naik. Kedua keinginan itu mudah dipahami.\n\nKamu bertanya apakah lampunya masih menyala, dan anak itu menjawab lebih dulu. “Masih ada sedikit.” Petugas perahu sedang memeriksa jendela bercahaya, tetapi kamu tidak bisa menjanjikan waktu tiba mereka. Kamu bisa memandunya mengangkat cahaya agar terlihat, atau menjelaskan pekerjaan petugas tanpa berpura-pura bahaya sudah lewat. Ia tetap di kanal, menunggu jawabanmu."
          },
          "choices": [
            {
              "id": "encounter-window-1-1",
              "label": {
                "en": "“Keep your lamp high. The boat will look for it.”",
                "id": "“Angkat lampunya. Perahu akan mencarinya.”"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-window": "complete"
                },
                "flags": {
                  "windowLanterns": true,
                  "lanternSignal": true
                }
              }
            },
            {
              "id": "encounter-window-1-2",
              "label": {
                "en": "Tell her the boat crew is checking every lit window",
                "id": "Bilang petugas memeriksa setiap jendela bercahaya"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-window": "complete"
                },
                "flags": {
                  "windowLanterns": true,
                  "honestReassurance": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-window-2",
          "text": {
            "en": "A love song suddenly takes over the emergency band, tinny and much too cheerful for the rain. “Sorry,” a man says from a balcony. “Wrong button. Again. My wife warned me about this radio.” He struggles with the controls, and you hear someone in the room telling him to stop pressing things simply because they look important. For a few seconds, the city sounds almost ordinary.\n\nThe song is older than Nila, and familiar enough that you know where the chorus will end. Other calls still need this channel, but the balcony radio can do something useful once its owner finds the right button. You can ask him to relay route updates, or let the last chorus finish before clearing the band. He apologizes again, waiting to hear whether he has made a terrible mistake.",
            "id": "Lagu cinta tiba-tiba memenuhi kanal darurat, nyaring dan terlalu riang untuk hujan ini. “Maaf,” kata seorang lelaki dari balkon. “Salah tombol. Lagi. Istri saya sudah memperingatkan soal radio ini.” Ia mengutak-atik tombol, dan seseorang di ruangan menyuruhnya berhenti menekan benda hanya karena tampak penting. Beberapa detik kota terdengar nyaris biasa.\n\nLagu itu lebih tua daripada Nila, cukup akrab sampai kamu tahu kapan bagian reff akan berakhir. Panggilan lain masih membutuhkan kanal, tetapi radio balkon bisa berguna setelah pemiliknya menemukan tombol yang tepat. Kamu bisa memintanya meneruskan kabar rute, atau membiarkan reff terakhir selesai sebelum mengosongkan kanal. Ia meminta maaf lagi, menunggu apakah kesalahannya sangat buruk."
          },
          "choices": [
            {
              "id": "encounter-window-2-1",
              "label": {
                "en": "Ask them to use the radio for route updates",
                "id": "Minta radio dipakai untuk kabar rute"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-window": "complete"
                },
                "flags": {
                  "windowMusic": true,
                  "neighborhoodRelay": true
                }
              }
            },
            {
              "id": "encounter-window-2-2",
              "label": {
                "en": "Let the last chorus finish, then clear the channel",
                "id": "Biarkan reff selesai, lalu kosongkan kanal"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-window": "complete"
                },
                "flags": {
                  "windowMusic": true,
                  "sharedSong": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-window-3",
          "text": {
            "en": "A woman calls to say she has opened her upstairs room to six neighbors. “Seven, if somebody is small. Or willing to fold.” She gives a little laugh, then asks whether there are people stranded on the market street who need somewhere above the water. The offer is practical and immediate. She has a room; she would rather it be crowded than leave someone waiting below.\n\nYou check which window belongs to her while she makes space behind the microphone. No fee or permission form is being requested, but the rescue crews still need to know where people have gone. You can share her location with them, or ask her to put the room on the live headcount. Both begin by taking the offer seriously enough to make sure it reaches the people who need it.",
            "id": "Seorang perempuan menelepon: kamar atasnya dibuka untuk enam tetangga. “Tujuh kalau ada yang kecil. Atau mau dilipat.” Ia tertawa sebentar, lalu bertanya apakah warga pasar yang terjebak membutuhkan tempat di atas air. Tawaran itu sederhana dan bisa dipakai sekarang. Ia punya kamar; ia lebih suka tempatnya sesak daripada membiarkan orang menunggu di bawah.\n\nKamu memastikan jendela mana miliknya sementara ia menata ruang di belakang mikrofon. Tak ada biaya atau formulir izin, tetapi petugas penyelamat tetap perlu tahu ke mana warga berpindah. Kamu bisa membagikan lokasinya kepada mereka, atau meminta kamar itu dimasukkan ke hitungan langsung. Keduanya dimulai dengan menganggap tawaran itu cukup penting untuk diteruskan kepada yang membutuhkan."
          },
          "choices": [
            {
              "id": "encounter-window-3-1",
              "label": {
                "en": "Share the room location with the rescue crew",
                "id": "Bagikan lokasi kamar kepada petugas"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-window": "complete"
                },
                "flags": {
                  "windowStranger": true,
                  "shelterRoom": true
                }
              }
            },
            {
              "id": "encounter-window-3-2",
              "label": {
                "en": "Ask her to register the room on the live headcount",
                "id": "Minta kamar didaftarkan ke hitungan langsung"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-window": "complete"
                },
                "flags": {
                  "windowStranger": true,
                  "shelterRegistered": true
                }
              }
            }
          ]
        }
      ],
      "artAlt": {
        "en": "Neighborhood balcony windows with varied torch signals across rain, no visible human faces.",
        "id": "Kanal warga · jendela"
      }
    },
    "encounter-rooftops": {
      "type": "random",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "encounter-rooftops",
      "location": {
        "en": "Roof-to-roof signal",
        "id": "Tanda dari atap ke atap"
      },
      "text": {
        "en": "A light moves across a neighboring roof as the radio catches another local call. You ask for their position and listen for the people behind the signal; a marker is useful only if someone knows who is waiting beside it.",
        "id": "Cahaya bergerak di atap sebelah ketika radio menangkap panggilan warga lagi. Kamu menanyakan posisi mereka dan mendengarkan orang di balik tanda itu; penanda baru berguna jika ada yang tahu siapa menunggu di sana."
      },
      "choices": [],
      "encounters": [
        {
          "id": "encounter-rooftops-1",
          "text": {
            "en": "A bedsheet flaps from the corner of a roof, catching the torchlight whenever the wind lifts it. Its owner tells you it is meant as a rescue flag. “It used to be my good wedding linen. My husband said we should save it for an occasion.” She pauses to help a neighbor move clear of the wet edge. “I think this qualifies.”\n\nTwo neighbors are waiting with her, and their lamp battery is failing. The sheet will remain visible when the torch goes out, but the crew needs its position recorded rather than left to chance. You can log it as a rescue marker, or ask the next roof to relay their lamp signal while it lasts. She gives you the location again, more slowly this time, trusting that somebody is writing it down.",
            "id": "Seprai berkibar di sudut atap, menangkap cahaya senter setiap kali terangkat angin. Pemiliknya menjelaskan bahwa itu bendera penyelamatan. “Dulu kain bagus dari pernikahan saya. Suami bilang simpan untuk acara khusus.” Ia berhenti membantu tetangga menjauh dari tepi basah. “Saya rasa ini termasuk.”\n\nDua tetangga menunggu bersamanya, dan baterai lampu hampir habis. Seprai masih akan terlihat saat senter padam, tetapi petugas perlu posisi yang dicatat, bukan bergantung pada kebetulan. Kamu bisa mencatatnya sebagai penanda penyelamatan, atau meminta atap sebelah meneruskan tanda lampu selagi menyala. Ia mengulang lokasi lebih perlahan, percaya ada seseorang yang menuliskannya."
          },
          "choices": [
            {
              "id": "encounter-rooftops-1-1",
              "label": {
                "en": "Log the sheet as a rescue marker",
                "id": "Catat seprai sebagai tanda penyelamatan"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-rooftops": "complete"
                },
                "flags": {
                  "roofLaundry": true,
                  "sheetMarker": true
                }
              }
            },
            {
              "id": "encounter-rooftops-1-2",
              "label": {
                "en": "Ask the next roof to relay their lamp signal",
                "id": "Minta atap sebelah meneruskan tanda lampu"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-rooftops": "complete"
                },
                "flags": {
                  "roofLaundry": true,
                  "roofRelay": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-rooftops-2",
          "text": {
            "en": "Someone has carried a birthday cake onto the roof. The candles are soaked, but SIXTY is still readable on the box, and the group has been arguing about whether to sing. “Only if you promise not to make me climb another stair,” the birthday woman says. “I've already earned next year's cake.” A tired laugh comes from the people keeping close beside her.\n\nYou ask where the group is waiting and hear the location twice over, each person afraid the others will leave something out. They need a pickup, and they also need a moment in which this remains her birthday. You can call a boat for the roof, or let the crew sing while you finish recording its position. Nothing about the joke makes them less frightened; it gives them a way to wait together.",
            "id": "Seseorang membawa kue ulang tahun ke atap. Lilinnya basah, tetapi ENAM PULUH masih terbaca di kotak, dan rombongan berdebat apakah perlu bernyanyi. “Asal jangan suruh saya naik tangga lagi,” kata yang berulang tahun. “Saya sudah pantas dapat kue tahun depan.” Tawa lelah terdengar dari orang-orang yang tetap dekat dengannya.\n\nKamu menanyakan tempat mereka menunggu dan mendapat lokasi dua kali, karena setiap orang takut yang lain melewatkan rincian. Mereka membutuhkan jemputan sekaligus momen yang tetap terasa seperti ulang tahunnya. Kamu bisa memanggil perahu ke atap, atau membiarkan petugas bernyanyi sambil mencatat posisinya. Lelucon itu tidak menghilangkan takut; mereka mendapat cara menunggu bersama."
          },
          "choices": [
            {
              "id": "encounter-rooftops-2-1",
              "label": {
                "en": "Call a boat for the roof group",
                "id": "Panggil perahu untuk rombongan atap"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-rooftops": "complete"
                },
                "flags": {
                  "roofBirthday": true,
                  "birthdayPickup": true
                }
              }
            },
            {
              "id": "encounter-rooftops-2-2",
              "label": {
                "en": "Let the crew sing while you record their location",
                "id": "Biarkan petugas bernyanyi saat kamu mencatat lokasi"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-rooftops": "complete"
                },
                "flags": {
                  "roofBirthday": true,
                  "birthdaySong": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-rooftops-3",
          "text": {
            "en": "A shopkeeper is signaling from a roof with a shaving mirror, trying to catch the rescue lights between gusts of rain. The generator beside him drowns out your reply. His neighbor counts each flash into the radio, then starts again because the shopkeeper insists she missed one. Their argument is frustratingly clear; the location you actually need is not.\n\nYou ask them to slow down, letting the neighbor know you can hear her even if the shopkeeper cannot hear you. They are both trying to help and each thinks the other is making it harder. You can repeat a simple lamp signal for the rescue crew, or have the neighbor relay the roof's position directly. First, they need one instruction both can follow instead of two people shouting over the generator.",
            "id": "Pemilik toko memberi tanda dari atap dengan cermin cukur, mencoba menangkap cahaya penyelamat di antara hujan. Generator di sampingnya menenggelamkan jawabanmu. Tetangganya menghitung kilatan ke radio, lalu mengulang karena pemilik toko bersikeras ada yang terlewat. Pertengkarannya terdengar sangat jelas; lokasi yang kamu perlukan justru tidak.\n\nKamu meminta mereka memperlambat, memberi tahu si tetangga bahwa kamu mendengarnya meski pemilik toko tidak mendengarmu. Keduanya mencoba membantu dan sama-sama merasa yang lain mempersulit. Kamu bisa mengulang tanda lampu sederhana untuk petugas, atau meminta tetangga menyebut posisi atap langsung. Mereka perlu satu petunjuk yang bisa diikuti bersama, bukan dua orang berteriak mengalahkan generator."
          },
          "choices": [
            {
              "id": "encounter-rooftops-3-1",
              "label": {
                "en": "Repeat a simple lamp signal for the rescue crew",
                "id": "Ulangi tanda lampu sederhana untuk petugas"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-rooftops": "complete"
                },
                "flags": {
                  "roofMirror": true,
                  "mirrorRoute": true
                }
              }
            },
            {
              "id": "encounter-rooftops-3-2",
              "label": {
                "en": "Ask the neighbor to relay the roof location",
                "id": "Minta tetangga meneruskan lokasi atap"
              },
              "next": "storm-hub",
              "effects": {
                "quests": {
                  "enc-rooftops": "complete"
                },
                "flags": {
                  "roofMirror": true,
                  "roofLocated": true
                }
              }
            }
          ]
        }
      ],
      "artAlt": {
        "en": "Roofs with bedsheet rescue flag, drowned birthday-cake box and small reflective mirror, tiny hooded back silhouettes.",
        "id": "Tanda dari atap ke atap"
      }
    },
    "encounter-tunnel": {
      "type": "random",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "encounter-tunnel",
      "location": {
        "en": "Maintenance channel · a knock",
        "id": "Kanal perawatan · ketukan"
      },
      "text": {
        "en": "A knock reaches the maintenance channel, followed by a caller giving a location beneath the station. You ask them to stay on the line while you check what they need and which part of the passage is still dry.",
        "id": "Ketukan masuk ke kanal perawatan, disusul penelepon yang menyebut lokasi di bawah stasiun. Kamu meminta mereka tetap tersambung sambil memeriksa bantuan yang dibutuhkan dan bagian lorong yang masih kering."
      },
      "choices": [],
      "encounters": [
        {
          "id": "encounter-tunnel-1",
          "text": {
            "en": "Three taps come through an open microphone before a cleaner answers. Her trolley is wedged across a flood door, and two people are waiting with her on the dry side. “It's the first time this thing has held still,” she says. You hear her checking that they are both there, then asking whether a rescue crew knows which side of the door they need to reach.\n\nYou repeat their position instead of answering with a vague promise that help is coming. The cleaner sounds relieved simply to hear it said correctly. You can register the dry-side pickup now, or keep the line open until a crew answers her directly. Either way, the useful part of the call is not the trolley's unlikely cooperation; it is making sure the people beside it do not disappear into an unnamed corridor.",
            "id": "Tiga ketukan terdengar dari mikrofon terbuka sebelum petugas kebersihan menjawab. Trolinya tersangkut melintang di pintu banjir, dan dua orang menunggu bersamanya di sisi kering. “Baru kali ini benda ini mau diam,” katanya. Kamu mendengar ia memastikan keduanya masih ada, lalu bertanya apakah petugas penyelamat tahu sisi pintu yang perlu dituju.\n\nKamu mengulang posisi mereka alih-alih memberi janji samar bahwa bantuan sedang datang. Ia terdengar lega hanya karena lokasinya disebut benar. Kamu bisa mendaftarkan jemputan sisi kering sekarang, atau membiarkan kanal terbuka sampai petugas menjawabnya langsung. Hal berguna dari panggilan ini bukan troli yang mendadak patuh, melainkan memastikan orang di sampingnya tidak hilang dalam lorong tanpa nama."
          },
          "choices": [
            {
              "id": "encounter-tunnel-1-1",
              "label": {
                "en": "Register the dry-side pickup",
                "id": "Daftarkan jemputan sisi kering"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-tunnel": "complete"
                },
                "flags": {
                  "tunnelTap": true,
                  "cleanerPickup": true
                }
              }
            },
            {
              "id": "encounter-tunnel-1-2",
              "label": {
                "en": "Keep the line open until the crew answers",
                "id": "Biarkan kanal terbuka sampai petugas menjawab"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-tunnel": "complete"
                },
                "flags": {
                  "tunnelTap": true,
                  "cleanerHeard": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-tunnel-2",
          "text": {
            "en": "A retired plumber calls to correct the tunnel map you have been using. “That door's been a cupboard since 2008,” he says. “Lovely cupboard. Terrible exit.” He describes its shelves with enough irritation that you believe he has complained about them before. More importantly, he knows a dry side passage that reaches the upper landing, and the printed plan does not show it.\n\nYou have him repeat the turns, separating the landmark he has checked from the old arrow on your screen. Local knowledge could save the crew a wasted journey, but another confident voice is not automatically a verified route. You can add his checked passage to the live map, or ask a second worker to confirm it. He is willing to explain again; he would rather be interrupted than have someone sent toward a cupboard.",
            "id": "Tukang pipa pensiun menelepon untuk membetulkan peta terowonganmu. “Pintu itu sudah jadi lemari sejak 2008,” katanya. “Lemari bagus. Pintu keluar buruk.” Ia menjelaskan raknya dengan kekesalan yang terdengar sudah sering disampaikan. Yang lebih penting, ia tahu lorong samping kering menuju pendaratan atas, tetapi denah cetak tidak menunjukkannya.\n\nKamu memintanya mengulang belokan, memisahkan patokan yang ia periksa dari panah lama di layar. Pengetahuan warga bisa mencegah petugas tersesat, tetapi suara yakin lain tidak otomatis menjadi rute terverifikasi. Kamu bisa menambahkan jalur yang ia periksa ke peta langsung, atau meminta pekerja kedua memastikan. Ia mau menjelaskan lagi; lebih baik disela daripada membiarkan orang diarahkan ke lemari."
          },
          "choices": [
            {
              "id": "encounter-tunnel-2-1",
              "label": {
                "en": "Add his checked passage to the live map",
                "id": "Tambahkan jalur yang diperiksanya ke peta langsung"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-tunnel": "complete"
                },
                "flags": {
                  "tunnelMap": true,
                  "localMap": true
                }
              }
            },
            {
              "id": "encounter-tunnel-2-2",
              "label": {
                "en": "Ask a second worker to confirm the passage",
                "id": "Minta pekerja lain memastikan jalurnya"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-tunnel": "complete"
                },
                "flags": {
                  "tunnelMap": true,
                  "passageConfirmed": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-tunnel-3",
          "text": {
            "en": "A security guard calls while he and his partner carry a resident toward the laundry stair. He has lost one shoe somewhere behind them. “Mark me incomplete,” he says, and his partner laughs so hard the radio clips the sound. You let the noise settle before asking for their location. Beneath it you can hear three people breathing, all of them still moving together.\n\nThe guard keeps trying to make the report only about the resident they are carrying. You remind him that he and his partner belong in it too. You can confirm all three on the headcount, or ask the shelter to have dry shoes ready for their arrival. He starts to protest that the shoe is hardly an emergency, then loses the argument when his partner tells you to make it a pair.",
            "id": "Satpam menelepon saat ia dan rekannya membawa seorang warga menuju tangga laundry. Satu sepatunya hilang di belakang mereka. “Tulis saya belum lengkap,” katanya, dan rekannya tertawa sampai radio memotong suara. Kamu menunggu bunyinya reda sebelum menanyakan lokasi. Di baliknya terdengar tiga orang bernapas, semuanya masih bergerak bersama.\n\nSatpam terus berusaha melaporkan hanya warga yang mereka bawa. Kamu mengingatkan bahwa ia dan rekannya juga perlu masuk catatan. Kamu bisa memastikan ketiganya dalam hitungan, atau meminta posko menyiapkan sepatu kering saat mereka tiba. Ia hendak membantah bahwa sepatu bukan keadaan darurat, lalu kalah ketika rekannya memintamu menyiapkan sepasang."
          },
          "choices": [
            {
              "id": "encounter-tunnel-3-1",
              "label": {
                "en": "Confirm all three on the headcount",
                "id": "Pastikan ketiganya masuk hitungan"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-tunnel": "complete"
                },
                "flags": {
                  "tunnelShoes": true,
                  "threeConfirmed": true
                }
              }
            },
            {
              "id": "encounter-tunnel-3-2",
              "label": {
                "en": "Tell the shelter to keep a dry pair of shoes",
                "id": "Minta posko menyiapkan sepatu kering"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-tunnel": "complete"
                },
                "flags": {
                  "tunnelShoes": true,
                  "dryShoes": true
                }
              }
            }
          ]
        }
      ],
      "artAlt": {
        "en": "Dry-side service tunnel, wedged cleaning trolley, one abandoned shoe and lamp above route chalkmarks.",
        "id": "Kanal perawatan · ketukan"
      }
    },
    "encounter-cargo": {
      "type": "random",
      "chapter": 2,
      "speaker": "operator",
      "art": "empty",
      "artKey": "encounter-cargo",
      "location": {
        "en": "Unsigned delivery channel",
        "id": "Kanal kiriman tanpa tanda tangan"
      },
      "text": {
        "en": "A delivery update comes through without a signature. You ask the caller what they are carrying and where they are waiting; tonight, a cargo entry may be hiding a person who needs to be counted.",
        "id": "Kabar kiriman masuk tanpa tanda tangan. Kamu bertanya apa yang dibawa dan di mana penelepon menunggu; malam ini, catatan barang mungkin menyembunyikan orang yang perlu ikut dihitung."
      },
      "choices": [],
      "encounters": [
        {
          "id": "encounter-cargo-1",
          "text": {
            "en": "A driver asks whether the priority lane includes a furious cat in a rice sack. “The cat has expressed an opinion,” he says as an indignant sound interrupts him. Two families are waiting in his van, and he cannot make the passenger list sound orderly no matter how he tries. “I'm not asking for special treatment. I just don't want to leave anyone off it.”\n\nYou ask him to begin with the people, then include the animal they are bringing with them. The driver's relief is audible; he had expected another argument over who belongs. You can log the families and their cat together, or direct the van to the shelter intake crew. The loudest passenger keeps objecting while he waits for your answer, making it difficult for either of you to sound properly official.",
            "id": "Sopir bertanya apakah jalur prioritas menerima kucing marah dalam karung beras. “Kucingnya sudah menyatakan pendapat,” katanya, lalu suara kesal menyela. Dua keluarga menunggu di mobilnya, dan ia tidak bisa membuat daftar penumpang terdengar tertib. “Saya tidak minta perlakuan khusus. Saya cuma tidak ingin ada yang tidak tercatat.”\n\nKamu memintanya mulai dari orang-orang, lalu memasukkan hewan yang dibawa bersama mereka. Kelegaannya terdengar; ia menyangka akan ada perdebatan lagi tentang siapa yang boleh ikut. Kamu bisa mencatat keluarga dan kucingnya bersama, atau mengarahkan mobil ke petugas penerima posko. Penumpang paling keras terus membantah sambil menunggu jawabanmu, membuat kalian sulit terdengar resmi."
          },
          "choices": [
            {
              "id": "encounter-cargo-1-1",
              "label": {
                "en": "Log the families and their animal together",
                "id": "Catat keluarga dan hewannya bersama"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-cargo": "complete"
                },
                "flags": {
                  "cargoCat": true,
                  "familyCargo": true
                }
              }
            },
            {
              "id": "encounter-cargo-1-2",
              "label": {
                "en": "Send the van to the shelter intake crew",
                "id": "Arahkan mobil ke petugas penerima posko"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-cargo": "complete"
                },
                "flags": {
                  "cargoCat": true,
                  "vanShelter": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-cargo-2",
          "text": {
            "en": "A driver calls about an unsigned envelope that reached the dock office before Raka's delivery. He remembers the seal: DIRECTOR'S ROUTING DESK. He cannot tell you what was inside, and you write that limit beside his account. What he can describe is the earlier handoff. The order was already moving through other hands before a young courier became the easiest person to question.\n\nYou ask whether he is willing to have his account included in the record. He is, though he wants you to keep the difference between seeing an envelope and knowing its contents clear. You can save that voluntary statement, or tell the channel that Raka did not write the routing order. Neither turns the driver into an all-knowing witness. It gives the courier back a part of the truth suspicion had taken from him.",
            "id": "Sopir menelepon tentang amplop tanpa tanda tangan yang tiba di kantor dermaga sebelum kiriman Raka. Ia ingat capnya: MEJA RUTE DIREKTUR. Ia tidak tahu isinya, dan kamu mencatat batas itu di samping keterangannya. Ia bisa menjelaskan serah terima sebelumnya. Perintah sudah melewati tangan lain sebelum seorang kurir muda menjadi orang paling mudah dicurigai.\n\nKamu bertanya apakah ia bersedia keterangannya dimasukkan dalam catatan. Ia setuju, tetapi meminta perbedaan antara melihat amplop dan mengetahui isinya tetap jelas. Kamu bisa menyimpan pernyataan sukarela itu, atau memberi tahu kanal bahwa Raka tidak menulis perintah rute. Sopir tidak berubah menjadi saksi yang tahu segalanya. Kurir mendapat kembali sebagian kebenaran yang diambil kecurigaan."
          },
          "choices": [
            {
              "id": "encounter-cargo-2-1",
              "label": {
                "en": "Add the driver’s voluntary account to the record",
                "id": "Tambahkan penjelasan sukarela sopir ke catatan"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-cargo": "complete"
                },
                "flags": {
                  "cargoEnvelope": true,
                  "deliveryWitness": true
                }
              }
            },
            {
              "id": "encounter-cargo-2-2",
              "label": {
                "en": "Tell the channel Raka did not write the order",
                "id": "Bilang Raka bukan penulis perintah"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-cargo": "complete"
                },
                "flags": {
                  "cargoEnvelope": true,
                  "clearedCourier": true
                },
                "trust": {
                  "raka": 1
                }
              }
            }
          ]
        },
        {
          "id": "encounter-cargo-3",
          "text": {
            "en": "A baker offers his delivery van and thirty rolls that never reached the morning order. “My accountant will hate this,” he says. “Let him. He can complain from his dry office.” Then he gets down to the practical details: the van can collect people from the inland road after they cross, and the rolls can go where there are more empty stomachs than supplies. He needs someone to tell him which help to arrange first.\n\nYou note that the van's offer depends on people reaching the inland side; it cannot solve the crossing itself. Still, a pickup or breakfast waiting beyond it gives the rescue crew one less problem to manage. You can assign the van to that arrival point, or send the rolls to the shelter kitchen. The baker asks you to repeat the destination, already looking for something useful to do with the rest of his night.",
            "id": "Pembuat roti menawarkan mobil kiriman dan tiga puluh roti yang belum sampai ke pesanan pagi. “Akuntan saya pasti kesal,” katanya. “Biar saja. Dia bisa mengeluh dari kantornya yang kering.” Lalu ia menjelaskan rinciannya: mobil bisa menjemput warga di jalan daratan setelah menyeberang, dan roti bisa dikirim ke tempat yang lebih banyak perut lapar daripada persediaan. Ia perlu tahu bantuan mana yang diatur lebih dulu.\n\nKamu mencatat bahwa mobil berguna setelah orang mencapai sisi daratan; mobil itu tidak menyelesaikan penyeberangan. Namun jemputan atau sarapan di seberang mengurangi satu urusan petugas penyelamat. Kamu bisa menugaskan mobil ke titik kedatangan, atau mengirim roti ke dapur posko. Pembuat roti meminta tujuan diulang, sudah mencari pekerjaan berguna untuk sisa malamnya."
          },
          "choices": [
            {
              "id": "encounter-cargo-3-1",
              "label": {
                "en": "Assign the van to the inland pickup",
                "id": "Tugaskan mobil ke jemputan daratan"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-cargo": "complete"
                },
                "flags": {
                  "cargoBread": true,
                  "breadVan": true
                }
              }
            },
            {
              "id": "encounter-cargo-3-2",
              "label": {
                "en": "Send the rolls to the shelter kitchen",
                "id": "Kirim roti ke dapur posko"
              },
              "next": "channel-hub",
              "effects": {
                "quests": {
                  "enc-cargo": "complete"
                },
                "flags": {
                  "cargoBread": true,
                  "warmBreakfast": true
                }
              }
            }
          ]
        }
      ],
      "artAlt": {
        "en": "Rainy bakery delivery van beside stacked bread crates and tied pet carrier, anonymous driver back silhouette.",
        "id": "Kanal kiriman tanpa tanda tangan"
      }
    },
    "encounter-rescue": {
      "type": "random",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "encounter-rescue",
      "location": {
        "en": "Rescue channel · last local call",
        "id": "Kanal penyelamatan · panggilan sekitar terakhir"
      },
      "text": {
        "en": "A caller reaches the rescue channel as you pause on the landing. You ask them to tell you where they are, then listen for what they need before deciding whom to contact.",
        "id": "Seorang penelepon menyambung ke kanal penyelamatan saat kamu berhenti di pendaratan. Kamu meminta posisinya, lalu mendengarkan kebutuhannya sebelum menentukan siapa yang perlu dihubungi."
      },
      "choices": [],
      "encounters": [
        {
          "id": "encounter-rescue-1",
          "text": {
            "en": "A boy calls to report a coat left on the inland stair. You ask whether it is blocking the route. “There's a person in it,” he says, suddenly remembering what matters. “I should have said that first.” You tell him he is doing the right thing by calling and ask him to stay where the radio can hear him. In the background, an adult says they are awake but need help getting up.\n\nThe person has walked as far as they can manage and is sitting clear of the main path. The boy stayed when the others moved on because he did not want them to wait alone. You can send the nearest crew straight to the stair or keep both callers on the line while help is arranged. Either way, the report needs a person and a position, not a coat someone might step around.",
            "id": "Seorang anak menelepon untuk melaporkan mantel tertinggal di tangga daratan. Kamu bertanya apakah mantel itu menghalangi jalan. “Ada orang di dalamnya,” katanya, baru ingat bagian terpenting. “Harusnya itu dulu yang saya bilang.” Kamu mengatakan ia sudah benar menelepon dan memintanya tetap dekat radio. Di belakangnya, orang dewasa berkata masih sadar, tetapi membutuhkan bantuan untuk berdiri.\n\nOrang itu sudah berjalan sejauh yang mampu dan duduk di luar jalur utama. Anak tadi tetap tinggal ketika yang lain bergerak karena tidak ingin meninggalkannya sendirian. Kamu bisa langsung mengirim petugas terdekat ke tangga atau menjaga keduanya di kanal sambil bantuan diatur. Laporan ini membutuhkan nama orang dan posisi, bukan sekadar mantel yang mungkin dilewati begitu saja."
          },
          "choices": [
            {
              "id": "encounter-rescue-1-1",
              "label": {
                "en": "Send the nearest crew to the stair",
                "id": "Kirim petugas terdekat ke tangga"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-rescue": "complete"
                },
                "flags": {
                  "rescueCoat": true,
                  "coatPickup": true
                }
              }
            },
            {
              "id": "encounter-rescue-1-2",
              "label": {
                "en": "Keep both callers on the line until help arrives",
                "id": "Jaga kedua penelepon sampai bantuan tiba"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-rescue": "complete"
                },
                "flags": {
                  "rescueCoat": true,
                  "coatCompanion": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-rescue-2",
          "text": {
            "en": "Two newlyweds reach the channel with one dry suitcase and an argument about whose clothes made it inside. They stop arguing when you ask whom they are looking for. The bride's uncle, Budi, left to help someone on the lower stair and has not rejoined them. “We can have another wedding,” she tells you. “We can't hire another Uncle Budi.” Her husband quietly supplies the last place they saw him.\n\nThey have not heard that he is hurt; they simply cannot find him among the arriving groups. You explain that a missing reply and a confirmed absence are different things, then check the headcount channel. You can put Budi's name on the open search list or ask the shelter desk whether his arrival has already been recorded. The couple needs somewhere to direct the question instead of carrying it from person to person.",
            "id": "Dua pengantin baru menyambung ke kanal dengan satu koper kering dan perdebatan tentang pakaian siapa yang sempat dimasukkan. Mereka berhenti berdebat ketika kamu menanyakan orang yang dicari. Paman pengantin perempuan, Budi, pergi membantu seseorang di tangga bawah dan belum bergabung lagi. “Kami bisa bikin pesta nikah lagi,” katanya. “Paman Budi tidak ada penggantinya.” Suaminya pelan-pelan menyebut tempat terakhir mereka melihatnya.\n\nMereka belum mendapat kabar bahwa Budi terluka; hanya belum menemukannya di rombongan yang tiba. Kamu menjelaskan bahwa belum ada jawaban berbeda dengan kabar yang sudah dipastikan, lalu memeriksa kanal hitungan. Nama Budi bisa dimasukkan ke pencarian terbuka, atau meja posko diminta memeriksa apakah kedatangannya telah tercatat. Mereka perlu tempat mengajukan pertanyaan, bukan terus membawanya dari satu orang ke orang lain."
          },
          "choices": [
            {
              "id": "encounter-rescue-2-1",
              "label": {
                "en": "Put Budi’s name on the open headcount",
                "id": "Masukkan nama Budi ke hitungan terbuka"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-rescue": "complete"
                },
                "flags": {
                  "rescueWedding": true,
                  "budiSearch": true
                }
              }
            },
            {
              "id": "encounter-rescue-2-2",
              "label": {
                "en": "Ask the shelter desk to check his arrival",
                "id": "Minta meja posko memeriksa kedatangan Budi"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-rescue": "complete"
                },
                "flags": {
                  "rescueWedding": true,
                  "budiChecked": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-rescue-3",
          "text": {
            "en": "A fisherman calls from a boat tied beside the inland stair. He has been watching people arrive, and some are struggling with the last stretch. “For once, the sea is bringing customers to me,” he says, then asks which crew needs the boat. He makes the joke sound easy, but he is already checking the rope and clearing space. There is room for the slower walkers once they reach the pickup point.\n\nYou ask him to describe the mooring so another operator can find it. He repeats the position and promises to stay available for a reply. You can reserve his boat for people who need the extra help or put it on Lia's live route board so she can assign it as requests arrive. The offer will not solve the whole crossing, but it can spare someone the final walk they no longer have the strength to make.",
            "id": "Seorang nelayan menelepon dari perahu yang tertambat di samping tangga daratan. Ia melihat warga berdatangan, beberapa kesulitan menempuh bagian terakhir. “Sekali ini laut yang mengantar pelanggan,” katanya, lalu bertanya petugas mana yang membutuhkan perahu. Candanya terdengar ringan, tetapi ia sudah memeriksa tali dan mengosongkan tempat. Ada ruang untuk orang yang lambat berjalan setelah mencapai titik penjemputan.\n\nKamu memintanya menjelaskan tambatan agar operator lain bisa menemukannya. Ia mengulang posisi dan berjanji tetap menunggu jawaban. Perahunya bisa disiapkan khusus untuk warga yang perlu bantuan tambahan, atau dimasukkan ke papan rute Lia agar bisa ditugaskan sesuai permintaan. Tawaran itu tidak menyelesaikan seluruh penyeberangan, tetapi bisa menghindarkan seseorang dari langkah terakhir yang sudah tidak sanggup mereka tempuh."
          },
          "choices": [
            {
              "id": "encounter-rescue-3-1",
              "label": {
                "en": "Reserve his boat for the slower walkers",
                "id": "Siapkan perahunya untuk yang lambat berjalan"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-rescue": "complete"
                },
                "flags": {
                  "rescueFisher": true,
                  "fisherBackup": true
                }
              }
            },
            {
              "id": "encounter-rescue-3-2",
              "label": {
                "en": "Add the boat to Lia’s live route board",
                "id": "Tambahkan perahu ke papan rute Lia"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-rescue": "complete"
                },
                "flags": {
                  "rescueFisher": true,
                  "boatRegistered": true
                }
              }
            }
          ]
        }
      ],
      "artAlt": {
        "en": "Small rescue boat moored beside inland stair with drenched luggage and forgotten coat, hooded crew from rear.",
        "id": "Kanal penyelamatan · panggilan sekitar terakhir"
      }
    },
    "encounter-static": {
      "type": "random",
      "chapter": 3,
      "speaker": "operator",
      "art": "empty",
      "artKey": "encounter-static",
      "location": {
        "en": "A voice behind the static",
        "id": "Suara di balik desis"
      },
      "text": {
        "en": "A faint voice breaks through the receiver's static. You move the radio under your coat to hear clearly and check whether it is a live caller or another recorded fragment.",
        "id": "Suara samar menembus desis radio. Kamu melindungi radio dengan mantel agar terdengar jelas, lalu memeriksa apakah itu penelepon langsung atau potongan rekaman lain."
      },
      "choices": [],
      "encounters": [
        {
          "id": "encounter-static-1",
          "text": {
            "en": "A man gives his address three times, each repetition faster than the last. He seems to expect the line to cut before anyone can write it down. You read the location back to him before he can begin a fourth time. There is a pause. “Oh,” he says. “You heard me.” He tells you where he is waiting above the water and asks whether someone can pass that information to a boat.\n\nYou confirm that the position is on your board. He does not need another promise that everything will be fine; he needs to know what happens to the request after this conversation ends. You can relay his location to the boat crew immediately or stay with him on the line while the crew replies. He listens as you explain the next step, no longer spending every spare second repeating his address.",
            "id": "Seorang lelaki menyebut alamatnya tiga kali, setiap pengulangan lebih cepat. Sepertinya ia menunggu sambungan putus sebelum ada yang sempat mencatat. Kamu membacakan lokasinya kembali sebelum ia mulai untuk keempat kali. Ada jeda. “Oh,” katanya. “Kamu dengar saya.” Ia menjelaskan tempat menunggu di atas air dan bertanya apakah informasi itu bisa diteruskan kepada petugas perahu.\n\nKamu memastikan posisinya sudah masuk ke papan. Ia tidak membutuhkan janji lain bahwa semua akan baik-baik saja; ia perlu tahu nasib permintaannya setelah percakapan berakhir. Kamu bisa langsung mengirim lokasi kepada petugas perahu atau tetap menemaninya di kanal sampai petugas menjawab. Ia mendengarkan penjelasan langkah berikutnya, tanpa lagi menghabiskan setiap jeda untuk mengulang alamat."
          },
          "choices": [
            {
              "id": "encounter-static-1-1",
              "label": {
                "en": "Confirm his position to the boat crew",
                "id": "Pastikan posisinya kepada petugas perahu"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-static": "complete"
                },
                "flags": {
                  "staticCaller": true,
                  "callerLocated": true
                }
              }
            },
            {
              "id": "encounter-static-1-2",
              "label": {
                "en": "Keep him on the line while the crew replies",
                "id": "Temani di kanal sampai petugas menjawab"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-static": "complete"
                },
                "flags": {
                  "staticCaller": true,
                  "callerStayed": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-static-2",
          "text": {
            "en": "A loose receiver beside the landing plays one last ECHO fragment. Your old voice begins telling people to remain where they are, using the calm tone you practiced in the training room. You check the local lead and unplug it. The replay stops halfway through a word. Nearby callers are still listening, so you explain that they heard a recording, not a new instruction from the rescue crew.\n\nFor a moment you hear your own breathing without the borrowed voice beneath it. You can log the fragment so the next operator recognizes it as a replay, or use the channel to remind nearby callers to follow the live route board. Either choice gives the interruption a clear explanation. You have heard enough tonight to know how quickly an unchallenged recording can begin sounding like permission to wait.",
            "id": "Penerima longgar di dekat pendaratan memutar satu potongan ECHO terakhir. Suara lamamu mulai meminta orang tetap di tempat, dengan nada tenang yang dulu dilatih di ruang rekaman. Kamu memeriksa kabel setempat dan mencabutnya. Putaran berhenti di tengah kata. Warga sekitar masih mendengarkan, jadi kamu menjelaskan bahwa tadi rekaman, bukan instruksi baru dari petugas penyelamat.\n\nSesaat kamu mendengar napasmu sendiri tanpa suara pinjaman di bawahnya. Potongan itu bisa dicatat agar operator berikutnya mengenalinya sebagai putaran ulang, atau kanal dipakai untuk mengingatkan warga mengikuti papan rute langsung. Kedua pilihan memberi penjelasan jelas atas gangguan tadi. Malam ini kamu sudah mendengar betapa cepat rekaman tanpa koreksi bisa terdengar seperti alasan untuk terus menunggu."
          },
          "choices": [
            {
              "id": "encounter-static-2-1",
              "label": {
                "en": "Log the fragment as a replay, not a live order",
                "id": "Catat sebagai putaran ulang, bukan perintah langsung"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-static": "complete"
                },
                "flags": {
                  "staticOwnVoice": true,
                  "replayMarked": true
                }
              }
            },
            {
              "id": "encounter-static-2-2",
              "label": {
                "en": "Tell nearby callers to follow the live route board",
                "id": "Minta warga mengikuti papan rute langsung"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-static": "complete"
                },
                "flags": {
                  "staticOwnVoice": true,
                  "liveRouteTrusted": true
                }
              }
            }
          ]
        },
        {
          "id": "encounter-static-3",
          "text": {
            "en": "Iman's daughter has borrowed a neighbor's radio. She tells you she is waiting somewhere safe, then asks whether her father still thinks he has to fix all the lights before coming home. “Tell Dad he can come back even if the stars stay broken,” she says. You remember the way he described his work to her and ask her to repeat the message so you can get every word right.\n\nYou promise to pass it on, without promising a return you cannot yet confirm. She accepts that more quietly than you expected and stays near the neighbor while you decide whom to contact. You can send her exact words to Iman or let the shelter desk know where she is waiting safely. A rescue report can carry this too: the place someone hopes to return to, and the person who will be there when they do.",
            "id": "Anak Iman meminjam radio tetangga. Ia mengatakan menunggu di tempat aman, lalu bertanya apakah ayahnya masih merasa harus memperbaiki semua lampu sebelum pulang. “Bilang Ayah boleh kembali meskipun bintangnya masih rusak,” katanya. Kamu teringat cara Iman menjelaskan pekerjaannya kepada anak itu dan memintanya mengulang pesan agar setiap kata tercatat dengan benar.\n\nKamu berjanji meneruskan pesan, tanpa menjanjikan kepulangan yang belum bisa dipastikan. Ia menerima jawaban itu lebih tenang daripada dugaanmu dan tetap bersama tetangga sementara kamu memilih siapa yang dihubungi. Kata-katanya bisa dikirim langsung kepada Iman, atau posisi amannya disampaikan ke meja posko. Laporan penyelamatan juga bisa membawa hal ini: tempat yang ingin dituju seseorang, dan orang yang akan menunggu di sana."
          },
          "choices": [
            {
              "id": "encounter-static-3-1",
              "label": {
                "en": "Relay her exact words to Iman",
                "id": "Teruskan kata-katanya kepada Iman"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-static": "complete"
                },
                "flags": {
                  "staticDaughter": true,
                  "daughterMessage": true
                },
                "trust": {
                  "iman": 1
                }
              }
            },
            {
              "id": "encounter-static-3-2",
              "label": {
                "en": "Tell the shelter desk she is waiting safely",
                "id": "Bilang ke posko bahwa ia menunggu dengan aman"
              },
              "next": "final-hub",
              "effects": {
                "quests": {
                  "enc-static": "complete"
                },
                "flags": {
                  "staticDaughter": true,
                  "daughterLocated": true
                }
              }
            }
          ]
        }
      ],
      "artAlt": {
        "en": "Tower battery radio among rain drops with unplugged receiver lead, separate small lamp shining through fog.",
        "id": "Suara di balik desis"
      }
    }
  },
  "version": 2,
  "tagline": {
    "en": "Someone is using your voice. The people calling are real.",
    "id": "Seseorang memakai suaramu. Orang yang menelepon sungguh ada."
  },
  "chapters": [
    {
      "id": 1,
      "title": {
        "en": "Three Live Lines",
        "id": "Tiga Suara yang Hidup"
      }
    },
    {
      "id": 2,
      "title": {
        "en": "A Voice on Loan",
        "id": "Suara Pinjaman"
      }
    },
    {
      "id": 3,
      "title": {
        "en": "What We Carry Into Morning",
        "id": "Yang Kita Bawa ke Pagi"
      }
    }
  ],
  "quests": [
    {
      "id": "live-lines",
      "kind": "main",
      "title": {
        "en": "Keep Them Talking",
        "id": "Jaga Mereka Tetap Bicara"
      },
      "description": {
        "en": "Reach Mara, Iman, and Raka. Open two safe routes.",
        "id": "Hubungi Mara, Iman, dan Raka. Buka dua jalur aman."
      },
      "unlockScene": "arrival"
    },
    {
      "id": "borrowed-voice",
      "kind": "main",
      "title": {
        "en": "Find the Borrowed Voice",
        "id": "Cari Suara Pinjaman"
      },
      "description": {
        "en": "Trace the false order and discover who approved it.",
        "id": "Lacak perintah palsu dan siapa yang mengizinkannya."
      },
      "unlockScene": "storm-hub",
      "completeFlag": "archiveVerified"
    },
    {
      "id": "last-transmission",
      "kind": "main",
      "title": {
        "en": "Bring the City to Morning",
        "id": "Antar Kota ke Pagi"
      },
      "description": {
        "en": "Move the trapped residents and decide what truth to send.",
        "id": "Pindahkan warga terjebak dan pilih kebenaran yang dikirim."
      },
      "unlockScene": "tower-approach"
    },
    {
      "id": "bell",
      "kind": "side",
      "title": {
        "en": "The Bell That Still Works",
        "id": "Lonceng yang Masih Bekerja"
      },
      "description": {
        "en": "Help Bu Sari signal neighbors without trusting a screen.",
        "id": "Bantu Bu Sari memanggil warga tanpa mengandalkan layar."
      },
      "unlockScene": "storm-hub",
      "completeFlag": "communityBell"
    },
    {
      "id": "medicine",
      "kind": "side",
      "title": {
        "en": "Cold Cargo",
        "id": "Titipan Dingin"
      },
      "description": {
        "en": "Keep Lia’s clinic supplies moving toward the hill shelter.",
        "id": "Bantu Lia membawa persediaan klinik ke posko bukit."
      },
      "unlockScene": "storm-hub",
      "completeFlag": "medicineDelivered"
    },
    {
      "id": "letter",
      "kind": "side",
      "title": {
        "en": "An Unsent Goodnight",
        "id": "Selamat Malam yang Tertunda"
      },
      "description": {
        "en": "Listen to the message Nila left outside the official record.",
        "id": "Dengarkan pesan Nila yang tak masuk catatan resmi."
      },
      "unlockScene": "channel-hub"
    },
    {
      "id": "witness",
      "kind": "side",
      "title": {
        "en": "The Empty Chair",
        "id": "Kursi Kosong"
      },
      "description": {
        "en": "Find Salim and protect the testimony he carried out.",
        "id": "Temukan Salim dan lindungi kesaksian yang dibawanya."
      },
      "unlockScene": "channel-hub",
      "completeFlag": "witnessSafe"
    },
    {
      "id": "dog",
      "kind": "side",
      "title": {
        "en": "One More Passenger",
        "id": "Satu Penumpang Lagi"
      },
      "description": {
        "en": "A dog is stranded beside the route marker. Find a way up.",
        "id": "Seekor anjing terjebak di penanda rute. Cari jalan naik."
      },
      "unlockScene": "final-hub",
      "completeFlag": "dogSaved"
    }
  ],
  "endings": {
    "fullSignal": {
      "title": {
        "en": "The Whole Record",
        "id": "Seluruh Catatan"
      },
      "body": {
        "en": "By morning, both lower groups have reached the inland road. The full archive shows how Arga's signed priority rule and the reset hid people still waiting for help. ECHO is off the live channel, and the record can be checked outside the station. You have wanted an answer since the first false announcement. Now it is there, with your own decisions beside it.\n\nThe raw release carries private names and addresses as well as proof. Some callers must begin protecting their records while they are still finding dry clothes. You stay to help and to answer questions about the release. Bringing people out of the flood was real; so was sending their information beyond their control. The inquiry needs an account of both.\n\nAt the new rescue desk, you leave room beside each name for a confirmed position and the voice that gave it. No one is marked gone because a recording says a building is empty. When the next operator arrives, you show them the open entries before handing over the chair. Morning has brought a stronger record, and people who still deserve a say in what it contains.",
        "id": "Menjelang pagi, kedua rombongan dari jalur bawah mencapai jalan daratan. Arsip lengkap menunjukkan bagaimana aturan prioritas Arga dan perubahan catatan menyembunyikan orang yang masih menunggu pertolongan. ECHO sudah terputus dari kanal langsung, dan dokumennya bisa diperiksa di luar stasiun. Sejak pengumuman pertama, kamu mencari jawaban. Kini jawaban itu ada, berdampingan dengan keputusanmu sendiri.\n\nRilis mentah membawa nama dan alamat pribadi bersama bukti. Sebagian penelepon harus mulai melindungi data bahkan saat masih mencari pakaian kering. Kamu tetap tinggal untuk membantu serta menjawab pertanyaan tentang rilis itu. Mengeluarkan orang dari banjir adalah pertolongan nyata; mengirim informasi mereka ke luar kendali juga akibat nyata. Pemeriksaan perlu menjelaskan keduanya.\n\nDi meja penyelamatan baru, kamu menyisakan tempat di samping tiap nama untuk posisi yang pasti dan orang yang melaporkannya. Tak ada yang dianggap pergi hanya karena rekaman menyebut gedungnya kosong. Saat operator berikutnya datang, entri yang terbuka kamu tunjukkan sebelum kursi diserahkan. Pagi membawa catatan yang lebih kuat, serta orang-orang yang tetap berhak menentukan apa yang tercantum di dalamnya."
      }
    },
    "shelteredTruth": {
      "title": {
        "en": "A Truth With Room for People",
        "id": "Kebenaran yang Memuat Orang"
      },
      "body": {
        "en": "The protected record reaches the reviewers with Arga's authorization, the time sequence, and the hidden requests intact. Private addresses remain sealed. You have not made the accusation smaller by keeping those details out; you have separated what proves the decision from what would expose the people harmed by it. For the first time tonight, that distinction survives beyond your desk.\n\nThe inquiry will need independent checks and people willing to speak. Some questions cannot be answered as quickly as a raw broadcast would travel, and you accept the work that follows. At the shelter, a caller asks who will be allowed to read their statement. You can give a clear answer before asking them to tell the story again. It is a small beginning, but it belongs to them.\n\nECHO has lost the live line. Your own voice, tired and imperfect, keeps asking for positions while the rescue crews finish their lists. You correct a place name aloud instead of hiding the mistake. The people listening can question you, and you can answer. The record reaches morning with its evidence preserved and enough room left for the lives that evidence was meant to protect.",
        "id": "Catatan terlindungi mencapai pemeriksa dengan izin Arga, urutan waktu, dan permintaan yang disembunyikan tetap utuh. Alamat pribadi masih disegel. Dengan membuang detail itu, kamu tak mengecilkan tuduhan; kamu memisahkan bukti keputusan dari informasi yang akan membuka kehidupan orang yang dirugikan. Untuk pertama kalinya malam ini, pembedaan itu bertahan sampai di luar mejamu.\n\nPemeriksaan membutuhkan pengecekan lain dan orang yang bersedia bicara. Sebagian pertanyaan tak bisa dijawab secepat siaran mentah menyebar, dan kamu menerima pekerjaan setelahnya. Di posko, seorang penelepon bertanya siapa yang boleh membaca keterangannya. Kamu bisa memberi jawaban jelas sebelum meminta ia mengulang kisahnya. Itu awal yang kecil, tetapi ia ikut menentukan awal tersebut.\n\nECHO kehilangan kanal langsung. Suaramu sendiri, lelah dan tak sempurna, terus menanyakan posisi sementara regu penyelamat menyelesaikan daftar. Kamu membetulkan nama tempat dengan suara keras alih-alih menyembunyikan kesalahan. Orang yang mendengarkan bisa mempertanyakanmu, dan kamu bisa menjawab. Catatan tiba di pagi dengan bukti yang terjaga serta ruang untuk kehidupan yang hendak dilindungi oleh bukti itu."
      }
    },
    "ashes": {
      "title": {
        "en": "What a Voice Cannot Burn",
        "id": "Yang Tak Bisa Dibakar Suara"
      },
      "body": {
        "en": "The source archive is gone. It will not assemble another instruction from the voice you lent for training, and its original audit cannot be read again either. You remain beside the rescue log for a while after the deletion. Stopping the reuse of this source was the choice you made. It has also removed the strongest record of how that reuse was authorized and concealed.\n\nIn your live account, you name Arga's priority rule and explain the reset that hid thirteen minutes of requests. An inquiry can follow independent copies and willing testimony, but it will have to build what the original could have shown directly. You do not promise a quick verdict or claim that every possible copy has vanished. You tell the reviewers what you destroyed, as well as why.\n\nMorning arrives with the rescue work still needing an accurate handover. You carry the names, confirmed positions, and open searches to the next desk. The missing archive does not settle what happened to the callers or excuse your part in the record's loss. When someone asks you to repeat the account, you sit down and begin again, this time with a living voice they can question.",
        "id": "Arsip sumber sudah hilang. Ia tak akan lagi merakit instruksi dari suara yang dulu kamu pinjamkan untuk latihan, tetapi audit aslinya juga tak bisa dibaca kembali. Setelah penghapusan, kamu lama duduk di samping catatan penyelamatan. Menghentikan penggunaan sumber ini adalah pilihanmu. Pilihan yang sama menghilangkan catatan terkuat tentang bagaimana pemakaiannya diizinkan dan kemudian ditutupi.\n\nDalam kesaksian langsung, kamu menyebut aturan prioritas Arga dan menjelaskan perubahan yang menyembunyikan tiga belas menit permintaan. Pemeriksaan bisa mengikuti salinan lain serta kesaksian sukarela, tetapi harus menyusun kembali yang tadinya bisa diperlihatkan oleh dokumen asli. Kamu tak menjanjikan putusan cepat atau menganggap semua salinan pasti lenyap. Kepada pemeriksa, kamu menjelaskan yang dimusnahkan beserta alasannya.\n\nPagi datang sementara pekerjaan penyelamatan masih perlu diserahkan dengan tepat. Kamu membawa nama, posisi yang terkonfirmasi, dan pencarian terbuka ke meja berikutnya. Arsip yang hilang tak menentukan nasib para penelepon atau membebaskanmu dari hilangnya bukti. Ketika diminta mengulang penjelasan, kamu duduk dan memulai lagi, kali ini dengan suara hidup yang bisa ditanya."
      }
    },
    "exposedWitness": {
      "title": {
        "en": "An Address on the Air",
        "id": "Alamat di Udara"
      },
      "body": {
        "en": "The raw archive reaches the public channel with the signed order and the hidden queue. It also carries Salim's home address. He asked you to protect that detail before giving his testimony, and you agreed. By the time you understand how far the copy has traveled, the promise cannot be restored by taking your own release down. His rescue was confirmed; his privacy was not protected.\n\nSalim reaches the boat, but his family must now move before he can speak safely to the inquiry. He does not withdraw what he saw, and he does not tell you the exposure was necessary. You remember the care he took to offer a copied order while keeping his home out of it. Both were possible. Your final release put them back together without asking him.\n\nArga's decisions can be investigated with a record strong enough to follow. You stay for that work and make sure your own release is recorded too. The account of this night would be incomplete if it named only the harm done before you took the chair. You help Salim secure what can still be secured, knowing that useful help now does not make the broken promise disappear.",
        "id": "Arsip mentah mencapai kanal umum bersama perintah bertanda tangan dan antrean tersembunyi. Alamat rumah Salim ikut terbawa. Ia sudah memintamu melindungi detail itu sebelum memberi kesaksian, dan kamu menyetujuinya. Saat kamu mengerti seberapa jauh salinannya menyebar, menarik rilismu sendiri tak bisa memulihkan janji. Penyelamatannya terkonfirmasi; privasinya tidak terlindungi.\n\nSalim mencapai perahu, tetapi keluarganya kini harus pindah sebelum ia bisa bersaksi dengan aman. Ia tak menarik kembali yang dilihatnya, dan tak mengatakan bahwa membuka alamat itu perlu. Kamu teringat kehati-hatiannya saat menawarkan salinan perintah sambil memisahkan informasi rumah. Keduanya bisa dilakukan. Rilis terakhirmu menyatukannya kembali tanpa meminta izin.\n\nKeputusan Arga bisa diperiksa dengan bukti yang cukup kuat untuk ditelusuri. Kamu tetap tinggal untuk pekerjaan itu dan memastikan rilismu sendiri ikut dicatat. Penjelasan malam ini tak akan lengkap jika hanya menyebut kerugian sebelum kamu menduduki kursi. Kamu membantu Salim mengamankan yang masih bisa diamankan, sambil tahu pertolongan sekarang tak membuat janji yang rusak menghilang."
      }
    },
    "fracturedTruth": {
      "title": {
        "en": "The Account Still Open",
        "id": "Penjelasan yang Belum Selesai"
      },
      "body": {
        "en": "The night ends with a record that still needs work. The rescue board shows confirmed arrivals beside names the boat crews must keep searching for. Your account identifies the priority rule and the hidden requests, but the surviving sequence needs checking, and people must decide whether they are willing to testify. Reaching morning has not made every part of the explanation complete.\n\nYou set the documents beside the live log instead of giving them a conclusion they cannot yet support. A reviewer asks where the sequence is certain and where it remains open. You answer as carefully as you can, marking the gaps rather than smoothing them away. The callers had to make choices with incomplete information; they deserve to see the same limits in the account written afterward.\n\nECHO is disconnected from the live channel. That gives you a place to start, though it cannot settle the questions left by the evacuation or the release. You stay while the next crew takes over the searches. When another reply comes in, you add the position and the time, then check the name again. The account remains open because there are still people and facts to find.",
        "id": "Malam berakhir dengan catatan yang masih membutuhkan pekerjaan. Papan penyelamatan memuat kedatangan yang terkonfirmasi di samping nama yang harus terus dicari regu perahu. Penjelasanmu menunjukkan aturan prioritas dan permintaan tersembunyi, tetapi urutan yang tersisa masih perlu diperiksa, dan orang harus menentukan apakah bersedia bersaksi. Sampai di pagi tak membuat semua bagian penjelasan otomatis lengkap.\n\nKamu meletakkan dokumen di samping catatan langsung tanpa memberi kesimpulan yang belum bisa didukung. Pemeriksa bertanya bagian mana yang pasti dan mana yang masih terbuka. Kamu menjawab sehati-hati mungkin, menandai kekosongan alih-alih merapikannya sampai hilang. Para penelepon harus memilih dengan informasi yang tak lengkap; mereka berhak melihat batas yang sama dalam catatan sesudahnya.\n\nECHO terputus dari kanal langsung. Itu memberi tempat untuk memulai, meskipun tak menyelesaikan pertanyaan yang ditinggalkan evakuasi maupun rilis. Kamu tetap tinggal saat regu berikutnya mengambil alih pencarian. Ketika balasan lain masuk, posisi dan waktunya ditambahkan, lalu namanya diperiksa lagi. Penjelasannya tetap terbuka karena masih ada orang dan fakta yang perlu ditemukan."
      }
    },
    "lostSignal": {
      "title": {
        "en": "Keep the Line Open",
        "id": "Biarkan Kanal Terbuka"
      },
      "body": {
        "en": "The people already above the flood reach shelter. On the lower route, the crossing closes before the remaining group and Iman can use it. The boat crews keep searching their last confirmed positions. You hand over those names with every detail you have, resisting the urge to turn an unanswered call into an ending. An accurate place and time are still something another crew can work with.\n\nECHO is stopped. Your account explains the signed priority rule, the hidden requests, and the training voice used without your live permission. The mechanism is clearer now than it was when the callers first asked for help. Knowing it does not reopen the crossing. You can describe the wrong decisions that brought the night here and still have to answer for the rescue choices made from your chair.\n\nMorning gives the station light without giving it certainty. You stay with the open search board and make room for each report the boats send back. There is regret in the work, and work that cannot wait for regret to pass. When a channel falls silent, you check the frequency and call again. The name remains on the page until a living person can tell you where to put it.",
        "id": "Orang yang sudah berada di atas banjir mencapai posko. Di jalur bawah, penyeberangan tertutup sebelum rombongan tersisa dan Iman bisa menggunakannya. Regu perahu terus mencari posisi terakhir mereka yang pasti. Kamu menyerahkan nama beserta semua detail yang ada, menahan keinginan mengubah panggilan tanpa jawaban menjadi sebuah akhir. Tempat dan waktu yang tepat masih bisa digunakan regu lain.\n\nECHO dihentikan. Kesaksianmu menjelaskan aturan prioritas bertanda tangan, permintaan tersembunyi, dan suara latihan yang dipakai tanpa izin untuk siaran langsung. Caranya bekerja kini lebih jelas daripada saat penelepon pertama meminta bantuan. Tetapi pengetahuan itu tak membuka penyeberangan lagi. Kamu bisa menjelaskan keputusan salah yang membawa malam ke sini, sambil tetap menjawab pilihan penyelamatan yang dibuat dari kursimu.\n\nPagi memberi cahaya kepada stasiun tanpa memberinya kepastian. Kamu tetap bersama papan pencarian terbuka dan menambahkan tiap laporan dari perahu. Ada penyesalan dalam pekerjaan itu, serta pekerjaan yang tak bisa menunggu penyesalan reda. Saat kanal sunyi, kamu memeriksa frekuensi lalu memanggil lagi. Namanya tetap di halaman sampai seseorang yang hidup bisa menjelaskan harus ditulis di mana."
      }
    }
  },
  "epilogues": [
    {
      "requires": {
        "communityBell": true
      },
      "text": {
        "en": "Bu Sari keeps the bell going until every lit window has answered. Afterward, she writes the ringing pattern beside the market door so nobody needs a working screen to know what it means. ‘Next time, we start sooner,’ she says, testing the rope with one tired hand.",
        "id": "Bu Sari membunyikan lonceng sampai setiap jendela terang menjawab. Setelahnya, ia menulis pola bunyi di dekat pintu pasar, agar warga tak perlu layar hidup untuk memahaminya. ‘Lain kali, kita mulai lebih cepat,’ katanya sambil menguji tali dengan tangan yang lelah."
      }
    },
    {
      "requires": {
        "medicineDelivered": true
      },
      "text": {
        "en": "Lia checks the sealed clinic cooler into the hill shelter and thanks the people who kept its route dry. Nearby, Deni finally has a chair and two rolls from the kitchen. He makes room for the second roll on his lap, as though a proper breakfast deserves a seat too.",
        "id": "Lia menerima kotak klinik yang masih tersegel di posko bukit, lalu berterima kasih kepada orang yang menjaga rutenya tetap kering. Di dekatnya, Deni akhirnya punya kursi dan dua roti dari dapur. Ia menyisakan tempat di pangkuan untuk roti kedua, seolah sarapan yang layak juga perlu duduk."
      }
    },
    {
      "requires": {
        "memoryKept": true
      },
      "text": {
        "en": "Nila's laugh stays off the public record. At breakfast, you order one cup and listen to her message again with the volume low. The joke is still ordinary, and that is what you needed: a moment when she was only your sister, complaining about breakfast and expecting you to answer.",
        "id": "Tawa Nila tetap di luar catatan umum. Saat sarapan, kamu memesan satu gelas dan memutar pesannya lagi dengan suara pelan. Leluconnya masih sederhana, justru itu yang kamu butuhkan: saat ia hanya adikmu, mengeluhkan sarapan dan berharap kamu akan menjawab."
      }
    },
    {
      "requires": {
        "memoryShared": true
      },
      "text": {
        "en": "Someone remembers the breakfast joke you shared about Nila and brings you toast. You explain that she would have complained about this toast too, and manage a small laugh. Her recording remains private. The kindness reaches you without anyone needing to hear the piece you kept for yourself.",
        "id": "Seseorang ingat lelucon sarapan Nila yang kamu ceritakan, lalu membawakan roti panggang. Kamu bilang roti ini pun pasti akan ia keluhkan, dan akhirnya bisa tertawa sedikit. Rekamannya tetap pribadi. Kebaikan sampai kepadamu tanpa siapa pun perlu mendengar bagian yang kamu simpan sendiri."
      }
    },
    {
      "requires": {
        "dogSaved": true
      },
      "text": {
        "en": "Biscuit falls asleep across the gate worker's boots as soon as they find a dry place to sit. The worker needs to stand up twice and abandons the idea both times. ‘He's had a long shift,’ he tells a volunteer, as though that explains why the whole shelter must step around them.",
        "id": "Begitu ada tempat kering untuk duduk, Biscuit tertidur melintang di sepatu petugas gerbang. Dua kali petugas itu ingin berdiri, dua kali pula ia membatalkannya. ‘Sifnya panjang,’ katanya kepada relawan, seolah itu cukup menjelaskan kenapa seisi posko harus berjalan memutari mereka."
      }
    },
    {
      "requires": {
        "witnessSafe": true,
        "protectedNames": true
      },
      "text": {
        "en": "Salim chooses the name on the cover of his statement and checks that his address stays sealed. His copied order goes to the reviewers with his testimony. Before handing it over, he asks to read the page once more; this time, nobody treats that request as an obstacle to the truth.",
        "id": "Salim memilih nama di sampul keterangannya dan memastikan alamatnya tetap disegel. Salinan perintah diserahkan kepada pemeriksa bersama kesaksiannya. Sebelum menyerahkan, ia meminta membaca halaman itu sekali lagi. Kali ini, tak ada yang menganggap permintaannya penghalang bagi kebenaran."
      }
    },
    {
      "requires": {
        "breadVan": true
      },
      "text": {
        "en": "The baker's van makes three trips inland. By the last one, the passengers have learned where to sit without crushing the bread boxes. He keeps a receipt for thirty rescued breakfasts and says his accountant can decide which column that belongs in when everyone has had some sleep.",
        "id": "Mobil tukang roti melakukan tiga perjalanan ke daratan. Pada perjalanan terakhir, penumpang sudah tahu cara duduk tanpa meremukkan kotak roti. Ia menyimpan struk tiga puluh sarapan yang terselamatkan. Nanti, setelah semua tidur, akuntannya boleh menentukan itu masuk kolom mana."
      }
    },
    {
      "requires": {
        "daughterMessage": true,
        "bridgeHeld": true
      },
      "text": {
        "en": "At the inland bus, Iman tells his daughter that the stars can wait tonight. ‘I knew that,’ she answers, as if she has been waiting for him to understand something simple. He sits with the yellow gloves in his lap and lets her talk about home without once checking a switch.",
        "id": "Di bus daratan, Iman bilang kepada anaknya bahwa bintang boleh menunggu malam ini. ‘Aku sudah tahu,’ jawabnya, seolah ia menunggu ayahnya memahami hal sederhana. Iman duduk dengan sarung tangan kuning di pangkuan, mendengarkan cerita rumah tanpa sekali pun memeriksa sakelar."
      }
    },
    {
      "requires": {
        "lanternSignal": true
      },
      "text": {
        "en": "The child holds her lamp at the upstairs window while her father stays beside her. The boat crew writes down the signal and position before answering. Nobody asks her to stop being frightened. She only needs to keep the light where they can find it, and someone tells her when they have.",
        "id": "Anak itu mengangkat lampu di jendela atas sementara ayahnya tetap di sampingnya. Regu perahu mencatat tanda serta posisi sebelum menjawab. Tak ada yang memintanya berhenti takut. Ia hanya perlu menjaga cahaya agar bisa ditemukan, lalu seseorang memastikan bahwa tandanya sudah terlihat."
      }
    },
    {
      "requires": {
        "honestReassurance": true
      },
      "text": {
        "en": "The child's father repeats your plan carefully, leaving out the promise you could not make. Their lit window remains on the rescue board with a confirmed position. When she asks whether anyone heard, he can answer that part truthfully and point to the lamp she is already holding.",
        "id": "Ayah anak itu mengulang rencanamu dengan hati-hati, tanpa menambah janji yang tak bisa kamu berikan. Jendela terang mereka tetap di papan penyelamatan dengan posisi yang pasti. Saat anaknya bertanya apakah ada yang mendengar, bagian itu bisa dijawab dengan jujur sambil menunjuk lampunya."
      }
    },
    {
      "requires": {
        "neighborhoodRelay": true
      },
      "text": {
        "en": "The balcony radio becomes a relay for the neighboring windows. Its owner puts tape over the emergency button so he can find it in the dark. He checks the label twice, then asks the next caller to repeat their position; the channel has found a steadier use than an accidental love song.",
        "id": "Radio balkon menjadi penghubung bagi jendela di sekitarnya. Pemiliknya memberi selotip pada tombol darurat agar bisa ditemukan dalam gelap. Labelnya diperiksa dua kali, lalu ia meminta penelepon berikutnya mengulang posisi. Kanal itu kini punya kegunaan selain lagu cinta yang tersiar tanpa sengaja."
      }
    },
    {
      "requires": {
        "sharedSong": true
      },
      "text": {
        "en": "The balcony singer finishes one chorus before the channel returns to rescue calls. Later, a shelter volunteer hums the tune while handing out dry blankets. Someone recognizes it and joins in for a line. For a minute, the familiar song makes the room feel less like a place nobody chose to be.",
        "id": "Penyanyi balkon menyelesaikan satu reff sebelum kanal kembali dipakai untuk penyelamatan. Kemudian, relawan posko mendendangkan lagunya sambil membagikan selimut kering. Seseorang mengenalinya dan ikut satu baris. Sesaat, ruang itu terasa lebih ramah bagi orang yang tak pernah memilih datang ke sana."
      }
    },
    {
      "requires": {
        "shelterRoom": true
      },
      "text": {
        "en": "The upstairs room takes in the market neighbors. Its owner moves one chair, then another, and discovers that seven people fit without anyone having to fold themselves in half. She tells the last arrival to keep the chair: if they have made it upstairs, there is room to sit properly.",
        "id": "Kamar atas menerima para tetangga pasar. Pemiliknya menggeser satu kursi, lalu kursi lain, dan mengetahui tujuh orang muat tanpa harus melipat badan. Kepada orang terakhir, ia meminta kursinya tetap dipakai. Kalau sudah berhasil naik, mereka berhak duduk dengan layak."
      }
    },
    {
      "requires": {
        "shelterRegistered": true
      },
      "text": {
        "en": "The offered room goes onto the live shelter list with its location and headcount. A crew checks how many people are there instead of asking whether the owner has the right surname. She reads the count back through her radio and keeps a place by the door for the next neighbor.",
        "id": "Kamar yang ditawarkan masuk daftar posko langsung dengan lokasi dan jumlah penghuninya. Petugas memeriksa berapa orang di sana, bukan apakah nama keluarga pemiliknya sesuai. Ia mengulang hitungan melalui radio dan menyisakan tempat dekat pintu untuk tetangga berikutnya."
      }
    },
    {
      "requires": {
        "sheetMarker": true
      },
      "text": {
        "en": "The wedding bedsheet gives the boat crew a clear marker for the roof pickup. Its owner gathers the wet cloth afterward and asks whether seawater stains count as an anniversary present. The sheet has done a job neither of them imagined when they chose it; for now, neither wants to throw it away.",
        "id": "Seprai pernikahan memberi regu perahu tanda yang jelas untuk jemputan atap. Setelahnya, pemilik mengumpulkan kain basah itu dan bertanya apakah noda laut termasuk hadiah ulang tahun. Seprai tadi berguna dengan cara yang tak pernah mereka bayangkan saat memilihnya. Kini keduanya tak ingin membuangnya."
      }
    },
    {
      "requires": {
        "roofRelay": true
      },
      "text": {
        "en": "When the first roof's lamp weakens, the neighbors repeat its signal from their own roof. The boat finds both groups on the same pass. On the arrival sheet, the two locations remain separate, but the people keep thanking one another across the shelter as though the roofs are still side by side.",
        "id": "Saat lampu atap pertama melemah, tetangganya mengulang tanda dari atap sendiri. Perahu menemukan kedua rombongan dalam satu perjalanan. Di daftar tiba, lokasinya tetap terpisah, tetapi orang-orang terus saling berterima kasih melintasi posko, seolah kedua atap masih berdampingan."
      }
    },
    {
      "requires": {
        "birthdayPickup": true
      },
      "text": {
        "en": "The birthday group goes onto the pickup request with the cake box as its marker. The woman keeps offering slices while they wait, insisting that a sixtieth birthday should feed somebody. A crew member writes down the location first, then thanks her for saving a piece for people still on duty.",
        "id": "Rombongan ulang tahun masuk permintaan jemputan dengan kotak kue sebagai tanda. Si ibu terus menawarkan potongan sambil menunggu; ulang tahun keenam puluh, katanya, harus bisa membuat orang kenyang. Petugas mencatat lokasi dulu, lalu berterima kasih karena ada kue untuk yang masih bertugas."
      }
    },
    {
      "requires": {
        "birthdaySong": true
      },
      "text": {
        "en": "The crew's uneven birthday song travels all the way to the shelter radio. By the final line, several people in the room are singing too. The woman says the missing candles can be forgiven, but warns them she expects better harmony next year. For once, next year enters the conversation easily.",
        "id": "Nyanyian ulang tahun petugas yang sumbang sampai ke radio posko. Pada baris terakhir, beberapa orang di ruangan ikut bernyanyi. Si ibu memaafkan lilin yang tak ada, tetapi meminta suara lebih kompak tahun depan. Kali ini, menyebut tahun depan terasa mudah."
      }
    },
    {
      "requires": {
        "mirrorRoute": true
      },
      "text": {
        "en": "The shopkeeper's mirror signal reaches the rescue crew and gives them the roof's position. When he can return to the shop, the mirror will go on a new emergency shelf. He says it can go back to shaving duty later; right now, it has earned a place where everyone can find it.",
        "id": "Tanda dari cermin pemilik toko terlihat oleh regu penyelamat dan membantu memastikan posisi atap. Saat bisa kembali, ia akan menaruh cermin itu di rak darurat baru. Urusan bercukur boleh menyusul, katanya. Sekarang cermin itu layak berada di tempat yang bisa ditemukan semua orang."
      }
    },
    {
      "requires": {
        "roofLocated": true
      },
      "text": {
        "en": "The neighbor confirms which roof is sending the mirror signal, and both names reach the pickup list. Their argument finally gives way to the practical question of who has the drier blanket. Neither apologizes very gracefully, but they pass the blanket between them without being asked.",
        "id": "Tetangga memastikan atap mana yang mengirim tanda cermin, lalu kedua nama masuk daftar jemputan. Pertengkaran akhirnya berganti pertanyaan praktis: siapa punya selimut lebih kering? Permintaan maaf mereka tidak terlalu luwes, tetapi selimut itu dibagi tanpa ada yang menyuruh."
      }
    },
    {
      "requires": {
        "cleanerPickup": true
      },
      "text": {
        "en": "The people on the dry side of the trolley are added to the pickup board. Their cleaner makes sure each name is heard before asking whether she can have the trolley back when the water falls. It was always a stubborn thing, she says, but tonight that was exactly the quality they needed.",
        "id": "Orang-orang di sisi kering troli masuk papan jemputan. Petugas kebersihannya memastikan tiap nama terdengar sebelum bertanya apakah troli boleh dikembalikan setelah air surut. Benda itu memang keras kepala, katanya, tetapi malam ini justru sifat itulah yang mereka butuhkan."
      }
    },
    {
      "requires": {
        "cleanerHeard": true
      },
      "text": {
        "en": "You keep the cleaner's channel open until the crew answers directly. She listens to the pickup plan, then says, ‘Good. A person, not another hold tune.’ Before the line closes, she repeats the location back herself. This time she knows who heard it, and what they are going to do next.",
        "id": "Kanal petugas kebersihan kamu buka sampai regu menjawab langsung. Ia mendengar rencana jemputan lalu berkata, ‘Bagus. Orang, bukan lagu tunggu lagi.’ Sebelum sambungan ditutup, ia mengulang lokasinya sendiri. Kini ia tahu siapa yang mendengar dan apa yang akan dilakukan berikutnya."
      }
    },
    {
      "requires": {
        "localMap": true
      },
      "text": {
        "en": "The retired plumber's passage is added to the live map, with a note explaining where the official drawing is wrong. Someone labels the cupboard beside it STILL NOT AN EXIT. He approves the correction and asks them to keep it there after the flood, when people are less inclined to ask directions.",
        "id": "Jalur dari pensiunan tukang pipa masuk peta langsung, lengkap dengan bagian gambar resmi yang keliru. Lemari di sebelahnya diberi label TETAP BUKAN PINTU KELUAR. Ia menyetujui koreksi itu dan meminta labelnya dibiarkan setelah banjir, ketika orang mulai malas bertanya arah lagi."
      }
    },
    {
      "requires": {
        "passageConfirmed": true
      },
      "text": {
        "en": "A second worker confirms the plumber's passage before the route note is shared. Both names and the check time stay beside the correction. The plumber reads it once, satisfied that the map finally says where people can walk rather than where somebody once intended to build a door.",
        "id": "Pekerja kedua memastikan jalur tukang pipa sebelum catatan rute dibagikan. Kedua nama serta waktu pemeriksaan tetap tertulis di samping koreksi. Si tukang pipa membacanya sekali, lega karena peta akhirnya menunjukkan jalan yang bisa dilalui, bukan tempat seseorang dulu berniat membuat pintu."
      }
    },
    {
      "requires": {
        "threeConfirmed": true
      },
      "text": {
        "en": "The guard, his partner, and the resident are each confirmed in the headcount. He makes you repeat all three names, then finally admits that only one of his shoes is missing. You correct the equipment note and leave the people counted as they are; a lost shoe does not reduce the group to two.",
        "id": "Satpam, rekannya, dan warga dipastikan satu per satu dalam hitungan. Ia meminta ketiga nama diulang, lalu akhirnya mengakui bahwa yang hilang hanya satu sepatu. Kamu membetulkan catatan barang dan menjaga hitungan orang tetap benar. Sepatu yang hilang tak mengurangi mereka menjadi dua."
      }
    },
    {
      "requires": {
        "dryShoes": true
      },
      "text": {
        "en": "The shelter finds the guard two dry shoes, although they are different colors. He tests both on the floor and declares himself fully restored. His partner starts to object, then gives up and passes him a towel. For the rest of the morning, the shoes are much easier to find than he is.",
        "id": "Posko menemukan dua sepatu kering untuk satpam, meskipun warnanya berbeda. Ia mencoba keduanya di lantai lalu menyatakan dirinya lengkap kembali. Rekannya hendak protes, lalu menyerah dan menyerahkan handuk. Sepanjang pagi, sepatunya jauh lebih mudah dikenali daripada pemiliknya."
      }
    },
    {
      "requires": {
        "familyCargo": true
      },
      "text": {
        "en": "The van's families stay together on the arrival sheet, with a note for the furious cat in their care. A volunteer checks that nobody has been separated before suggesting a signature. The cat contributes a complaint instead, which its owner says is the closest they are likely to get to consent.",
        "id": "Keluarga dalam mobil tetap bersama di daftar tiba, dengan catatan untuk kucing marah yang mereka bawa. Relawan memastikan tak ada yang terpisah sebelum meminta tanda tangan. Kucingnya memberi protes sebagai gantinya. Menurut pemilik, itulah jawaban setuju paling dekat yang mungkin didapat."
      }
    },
    {
      "requires": {
        "vanShelter": true
      },
      "text": {
        "en": "The van reaches shelter intake, where a volunteer finds a quieter corner for the cat and its family. The driver's next report is noticeably easier to hear. He thanks you for the route, then thanks the volunteer with even more feeling; everyone in the van has been listening to that cat for hours.",
        "id": "Mobil sampai di penerimaan posko. Relawan menemukan sudut lebih tenang untuk kucing dan keluarganya. Laporan sopir berikutnya jauh lebih mudah didengar. Ia berterima kasih atas rute, lalu mengucapkan terima kasih yang lebih mendalam kepada relawan. Seisi mobil sudah mendengarkan kucing itu berjam-jam."
      }
    },
    {
      "requires": {
        "deliveryWitness": true
      },
      "text": {
        "en": "The driver gives a voluntary account of the earlier envelope, with the details he actually saw kept separate from guesses. Raka's delivery becomes one link in the record, not an accusation large enough to explain everything. The driver reads his statement back and corrects a time before signing.",
        "id": "Sopir memberi keterangan sukarela tentang amplop sebelumnya, memisahkan yang benar-benar dilihat dari dugaan. Kiriman Raka menjadi satu kaitan dalam catatan, bukan tuduhan yang dipaksa menjelaskan semuanya. Sopir membaca keterangannya kembali dan membetulkan satu waktu sebelum menandatangani."
      }
    },
    {
      "requires": {
        "clearedCourier": true
      },
      "text": {
        "en": "During the call, you told Raka plainly that carrying the envelope did not make him the author of the order. He went quiet, then asked you to record one request for any future delivery: a person's name to sign for it, not another console code. You wrote it beside his name. It was a small request, but for once he had chosen the terms himself.",
        "id": "Dalam panggilan tadi, kamu menjelaskan kepada Raka bahwa membawa amplop tak membuatnya penulis perintah. Ia terdiam, lalu menitipkan satu permintaan untuk pengantaran mendatang: nama orang yang akan menerima, bukan kode konsol lagi. Kamu mencatatnya di samping namanya. Permintaan itu sederhana, tetapi kali ini ia sendiri yang menentukan syaratnya."
      }
    },
    {
      "requires": {
        "warmBreakfast": true
      },
      "text": {
        "en": "The baker's thirty rolls reach the shelter kitchen still warm enough for people to notice. A child saves half of one for a relative whose name is on the boat list. The volunteer wraps that half carefully and writes the name on the paper, keeping the small request beside the larger ones.",
        "id": "Tiga puluh roti tukang roti tiba di dapur posko, masih cukup hangat untuk terasa. Seorang anak menyimpan setengah untuk keluarga yang namanya masih di daftar perahu. Relawan membungkusnya dengan hati-hati dan menulis nama di kertas, menjaga permintaan kecil itu bersama permintaan yang lebih besar."
      }
    },
    {
      "requires": {
        "coatPickup": true
      },
      "text": {
        "en": "The coat on the stair becomes a named pickup request instead of a shape somebody might overlook. The boy waits beside the tired person until the crew arrives and takes their hand. Only then does he let the blanket slip from his own shoulder so it can be wrapped around both of them.",
        "id": "Mantel di tangga menjadi permintaan jemputan bernama, bukan bentuk yang mungkin terlewat. Anak itu menunggu di samping orang yang lelah sampai petugas datang memegang tangannya. Barulah ia melepaskan selimut dari bahunya agar bisa dibentangkan untuk mereka berdua."
      }
    },
    {
      "requires": {
        "coatCompanion": true
      },
      "text": {
        "en": "You stay on the channel with the boy and the tired stair walker until a crew can hear them both. Two voices mean two people to locate, even when one can say very little. The boy repeats the position for his companion, and you read it back before passing the line to the rescuers.",
        "id": "Kamu menemani anak dan orang yang letih di tangga sampai regu bisa mendengar keduanya. Dua suara berarti dua orang yang perlu ditemukan, meskipun salah satunya hanya sanggup bicara sedikit. Anak itu mengulang posisi untuk temannya, lalu kamu membacanya kembali sebelum kanal diserahkan kepada penyelamat."
      }
    },
    {
      "requires": {
        "budiSearch": true
      },
      "text": {
        "en": "Uncle Budi's name stays on the open headcount with the details his niece can confirm. The newlyweds check the shelter board together instead of separating to search in the flood. Every new arrival gives them another reason to look; nobody closes the entry simply because a reply is taking time.",
        "id": "Nama Paman Budi tetap dalam hitungan terbuka, bersama detail yang bisa dipastikan keponakannya. Pasangan pengantin memeriksa papan posko bersama, alih-alih berpisah mencari dalam banjir. Setiap kedatangan membuat mereka melihat lagi. Entri itu tak ditutup hanya karena jawaban belum datang."
      }
    },
    {
      "requires": {
        "budiChecked": true
      },
      "text": {
        "en": "The shelter desk finds Budi on its arrival sheet and confirms the entry with him. He asks why his niece has chosen this weather for a honeymoon, then waits impatiently to speak to her himself. You pass the answer on with the location attached; the joke is welcome, but the confirmed place is what brings relief.",
        "id": "Meja posko menemukan Budi di daftar tiba dan memastikan entri langsung kepadanya. Ia bertanya kenapa keponakannya memilih cuaca begini untuk bulan madu, lalu tak sabar ingin bicara sendiri. Kamu meneruskan jawaban beserta lokasinya. Leluconnya melegakan, tetapi tempat yang pasti membuat mereka benar-benar tenang."
      }
    },
    {
      "requires": {
        "fisherBackup": true
      },
      "text": {
        "en": "The fisherman waits beside the inland stair for the people who cannot keep the faster walkers' pace. His boat carries them across the last stretch toward shelter. He counts everyone aboard before pushing off, then asks the quickest passenger to sit down and let the slowest one settle first.",
        "id": "Nelayan menunggu di samping tangga daratan untuk orang yang tak mampu mengikuti langkah rombongan tercepat. Perahunya membawa mereka melewati bagian terakhir menuju posko. Ia menghitung penumpang sebelum berangkat, lalu meminta yang paling cepat duduk dan memberi waktu bagi yang paling lambat."
      }
    },
    {
      "requires": {
        "boatRegistered": true
      },
      "text": {
        "en": "Lia adds the fisherman's boat to the live route board, with its location and the help it can offer. He accepts the assignment without asking for a priority stamp. When the first request comes, he reads it back and checks the number of passengers, treating the list as a job rather than a favor owed to him.",
        "id": "Lia menambahkan perahu nelayan ke papan rute langsung, lengkap dengan lokasi dan bantuan yang bisa diberikan. Ia menerima tugas tanpa meminta cap prioritas. Saat permintaan pertama masuk, ia membacanya kembali dan memeriksa jumlah penumpang, menganggap daftar itu pekerjaan, bukan jasa yang harus dibalas."
      }
    },
    {
      "requires": {
        "callerLocated": true
      },
      "text": {
        "en": "The man's address reaches the boat crew correctly on the first relay. You listen while they read it back, then tell him which detail has been confirmed. He does not have to say it a fourth time or wonder which part was lost. The crew has a place to find, and he knows someone has heard it.",
        "id": "Alamat lelaki itu sampai dengan tepat kepada regu perahu pada penerusan pertama. Kamu mendengar mereka mengulang, lalu menjelaskan bagian yang sudah dipastikan. Ia tak perlu menyebutnya untuk keempat kali atau menebak mana yang hilang. Regu punya tempat untuk dicari, dan ia tahu ada yang mendengar."
      }
    },
    {
      "requires": {
        "callerStayed": true
      },
      "text": {
        "en": "You stay with the man until the crew answers his call. ‘You heard,’ he says once more, but this time the words are a confirmation rather than a question. You tell him who is taking over the line before leaving it, so the change of operator does not become another silence he must explain himself into.",
        "id": "Kamu tetap menemani lelaki itu sampai regu menjawab. ‘Kamu dengar,’ katanya sekali lagi, kini sebagai kepastian, bukan pertanyaan. Sebelum meninggalkan sambungan, kamu menjelaskan siapa yang mengambil alih, agar pergantian operator tak menjadi kesunyian lain yang memaksanya mengulang penjelasan."
      }
    },
    {
      "requires": {
        "replayMarked": true
      },
      "text": {
        "en": "The last ECHO fragment is marked REPLAY on the record. When its old command is mentioned again, the label travels with it, along with the time it was captured. Nobody has to guess whether that calm voice is giving a current order. The live route comes from the people checking it now.",
        "id": "Potongan ECHO terakhir diberi tanda PUTAR ULANG pada catatan. Saat perintah lamanya disebut lagi, label itu ikut dibawa bersama waktu penyimpanan. Orang tak perlu menebak apakah suara tenang tersebut memberi perintah sekarang. Rute langsung berasal dari orang yang sedang memeriksanya."
      }
    },
    {
      "requires": {
        "liveRouteTrusted": true
      },
      "text": {
        "en": "Nearby callers follow the live route board rather than the old announcement. The pencil corrections remain visible, with the check times beside them. One person asks why a route changed, and gets an answer instead of an order to stop questioning it. The next caller knows they can ask too.",
        "id": "Warga sekitar mengikuti papan rute langsung, bukan pengumuman lama. Koreksi pensil tetap terlihat dengan waktu pemeriksaan di sampingnya. Seseorang bertanya kenapa jalur berubah dan mendapat jawaban, bukan perintah untuk berhenti bertanya. Penelepon berikutnya tahu ia juga boleh bertanya."
      }
    },
    {
      "requires": {
        "daughterLocated": true
      },
      "text": {
        "en": "The shelter desk confirms that Iman's daughter is waiting safely and keeps his name beside hers on the family contact list. You pass on the place as carefully as any rescue position. Her father no longer has to wonder where she is while he holds the line; the crews know where to send his next message.",
        "id": "Meja posko memastikan anak Iman menunggu dengan aman, lalu menjaga nama ayah di samping namanya pada daftar keluarga. Kamu meneruskan tempatnya sehati-hati posisi penyelamatan. Iman tak lagi harus menebak lokasi anaknya sambil bertahan; regu tahu ke mana pesan berikutnya perlu dikirim."
      }
    },
    {
      "requires": {
        "daughterMessage": true,
        "bridgeHeld": false
      },
      "text": {
        "en": "Iman hears his daughter's words through the battery radio while his position remains with the boat crew. You pass both details together: where he was last heard, and the message he needs to carry home. The search entry stays open. Her words have reached him, even though his own arrival is not yet confirmed.",
        "id": "Iman mendengar pesan anaknya melalui radio baterai sementara posisinya tetap dipegang regu perahu. Kamu meneruskan kedua hal bersama: tempat terakhir ia terdengar dan pesan yang perlu dibawa pulang. Entri pencarian tetap terbuka. Kata-kata anaknya sudah sampai, meskipun kedatangannya belum terkonfirmasi."
      }
    },
    {
      "requires": {
        "massEvacuation": true
      },
      "text": {
        "en": "Mara's watch still says midnight when both patients sit down at the shelter table. The man who kept apologizing for being slow finishes his breakfast and asks for seconds. Mara passes the request to the kitchen without a joke. Only after the plate returns does she tell him there is no hurry now.",
        "id": "Jam Mara masih menunjukkan tengah malam saat kedua pasien duduk di meja posko. Lelaki yang terus minta maaf karena lambat menghabiskan sarapan lalu meminta tambah. Mara meneruskan permintaan itu ke dapur tanpa bercanda. Setelah piring kembali, barulah ia bilang sekarang tak perlu terburu-buru."
      }
    },
    {
      "requires": {
        "massEvacuation": true
      },
      "text": {
        "en": "Raka hangs the wet red strap beside the inland bus. When the next delivery is mentioned, he asks who will sign for it. ‘Someone who's actually there,’ he adds, keeping the question practical. He is willing to carry supplies again; this time, he wants to know whose hands they are going into.",
        "id": "Raka menggantung tali merah yang basah di samping bus daratan. Saat pengantaran berikutnya dibahas, ia bertanya siapa yang akan menandatangani. ‘Orang yang betul-betul ada,’ tambahnya dengan nada praktis. Ia bersedia membawa persediaan lagi; kali ini, ia ingin tahu tangan siapa yang akan menerimanya."
      }
    }
  ]
};
