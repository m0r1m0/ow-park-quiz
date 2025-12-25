// Overwatch 2 キャラクターとパークのデータ（日本語版）
// position: "left" または "right" でゲーム内の配置を示す

const heroData = {
  "heroes": {
    "tanks": [
      {
        "name": "D.Va",
        "nameJa": "D.Va",
        "perks": {
          "minor": [
            {
              "name": "バニーパワー",
              "description": "脱出時に75の一時的なオーバーヘルスを獲得し、メック召喚のダメージ範囲が50%増加",
              "position": "left"
            },
            {
              "name": "延長ブースター",
              "description": "ブースターで敵にヒットすると100%増加したダメージを与え、持続時間が0.5秒延長",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "シールドシステム",
              "description": "150のヘルスをシールドに変換。ディフェンスマトリックスは吸収ダメージの25%に基づいてシールドを回復",
              "position": "left"
            },
            {
              "name": "精密フュージョン",
              "description": "リロードボタンを押すとフュージョンキャノンの拡散が3秒間75%減少",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Doomfist",
        "nameJa": "ドゥームフィスト",
        "perks": {
          "minor": [
            {
              "name": "ワンツー",
              "description": "ロケットパンチで敵を壁にぶつけると、ハンドキャノンの弾薬をすべてリロードし、2発追加装填",
              "position": "left"
            },
            {
              "name": "適者生存",
              "description": "ベストディフェンスがキルから25のオーバーヘルスを獲得し、最大オーバーヘルスが50増加",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "アフターショック",
              "description": "サイズミックスラムで当たった敵は2秒間40%スロー",
              "position": "left"
            },
            {
              "name": "パワーマトリックス",
              "description": "パワーブロックは発動後最初の1秒間、飛び道具を吸収",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Hazard",
        "nameJa": "ハザード",
        "perks": {
          "minor": [
            {
              "name": "深い跳躍",
              "description": "バイオレントリープの範囲が15%増加",
              "position": "left"
            },
            {
              "name": "無秩序な熱意",
              "description": "スパイクガードのスパイクが30%のライフスティールを獲得",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "再構成",
              "description": "ジャグドウォールのヒットがスパイクガードに25エネルギーをチャージ、最大50追加",
              "position": "left"
            },
            {
              "name": "爆発的な串刺し",
              "description": "ボーンスパーヒットが敵にスパイクを埋め込む。近接攻撃とバイオレントリープの斬撃でそれらを爆発させ40ダメージ",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Junker Queen",
        "nameJa": "ジャンカークイーン",
        "perks": {
          "minor": [
            {
              "name": "暴走チャージ",
              "description": "ランページ使用時に無敵を獲得し、すべてのクールダウンが6秒リフレッシュ",
              "position": "left"
            },
            {
              "name": "バトルシャウト",
              "description": "コマンディングシャウトがスキャッターガンを完全リロードし、味方のリロード速度が50%増加",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ウィリーウィリー",
              "description": "ジャグドブレード回収時、範囲が100%増加し、30の追加衝撃ダメージ",
              "position": "left"
            },
            {
              "name": "野蛮な満足",
              "description": "カーネージの衝撃ダメージが100%のライフスティールを獲得",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Mauga",
        "nameJa": "マウガ",
        "perks": {
          "minor": [
            {
              "name": "運動バンドリア",
              "description": "オーバーランのチャージ中に最大150弾薬をリロード",
              "position": "left"
            },
            {
              "name": "放火魔",
              "description": "インセンディアリーチェーンガンで敵を着火すると50のオーバーヘルスを獲得",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ファイアウォーカー",
              "description": "オーバーランでヒットした敵を着火",
              "position": "left"
            },
            {
              "name": "戦闘燃料",
              "description": "クリティカルヒットで次回のカーディアックオーバードライブ使用時に3の一時的なオーバーヘルスを獲得、最大150",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Orisa",
        "nameJa": "オリーサ",
        "perks": {
          "minor": [
            {
              "name": "防御プロトコル",
              "description": "テラサージのチャージ中、毎秒100ヘルスを回復",
              "position": "left"
            },
            {
              "name": "モバイル強化",
              "description": "フォーティファイ発動中、移動速度低下なし、熱発生なし",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "チャージジャベリン",
              "description": "エナジージャベリンをチャージして飛翔速度とノックバックを増加。フルパワーで敵を貫通",
              "position": "left"
            },
            {
              "name": "プロテクティブバリア",
              "description": "ジャベリンスピンがバリアに置き換わる",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Ramattra",
        "nameJa": "ラマットラ",
        "perks": {
          "minor": [
            {
              "name": "ヴォイドサージ",
              "description": "ヴォイドアクセラレーターが連続射撃中に定期的に6発の追加飛び道具を放出",
              "position": "left"
            },
            {
              "name": "執拗なフォーム",
              "description": "ネメシスフォーム発動中、キルで持続時間が1秒延長",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ナナイト修復",
              "description": "レイヴナスヴォルテックス内で毎秒75ヘルス回復",
              "position": "left"
            },
            {
              "name": "復讐のヴォルテックス",
              "description": "レイヴナスヴォルテックスが空中にある間、Eを再度押すと起爆し、50ダメージを与えて敵を引き下ろす",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Reinhardt",
        "nameJa": "ラインハルト",
        "perks": {
          "minor": [
            {
              "name": "クルセイダーの炎",
              "description": "敵をスタンさせるとファイアストライクのチャージを回復、最大3まで過充填",
              "position": "left"
            },
            {
              "name": "バリアリチャージ",
              "description": "チャージ使用中の移動距離に応じて毎秒200のバリアフィールドを回復",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "シールドスラム",
              "description": "バリアフィールド発動中、メイン攻撃で敵にダメージとノックバック",
              "position": "left"
            },
            {
              "name": "着火された怒り",
              "description": "ファイアストライクでヒットした敵1体につき、2秒間攻撃速度が25%増加",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Roadhog",
        "nameJa": "ロードホッグ",
        "perks": {
          "minor": [
            {
              "name": "スクラップフック",
              "description": "チェインフックヒットで弾薬を2リロード",
              "position": "left"
            },
            {
              "name": "シュラプネルランチャー",
              "description": "スクラップガンのセカンダリファイアの射程を50%延長し、拡散を25%縮小",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "活性化",
              "description": "テイクアブリーザーでロードホッグの移動速度が急速に30%増加",
              "position": "left"
            },
            {
              "name": "引っ張られた豚肉",
              "description": "チェインフックで敵を引く距離に応じてオーバーヘルスを獲得、最大250",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Sigma",
        "nameJa": "シグマ",
        "perks": {
          "minor": [
            {
              "name": "キネティックサイクル",
              "description": "キネティックグラスプで飛び道具を吸収すると、アクリーションのクールダウンも減少",
              "position": "left"
            },
            {
              "name": "ハイパー回復",
              "description": "ハイパースフィアのダメージの50%が実験バリアのヘルスを回復",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ハイパーストライク",
              "description": "ハイパースフィアで5回直撃すると、次の近接攻撃成功時に敵を浮遊させてノックバック",
              "position": "left"
            },
            {
              "name": "浮遊",
              "description": "ダブルジャンプを発動・ホールドして短時間上昇浮遊",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Winston",
        "nameJa": "ウィンストン",
        "perks": {
          "minor": [
            {
              "name": "バリアトス",
              "description": "ウィンストンのバリアは使用時に前方に投げられる",
              "position": "left"
            },
            {
              "name": "ヘビーランディング",
              "description": "プライマルレイジ中、ジャンプパックのダメージと範囲が空中時間に応じて最大75%増加",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "チェーンライトニング",
              "description": "フルチャージのセカンダリファイアヒットが最大2体の追加ターゲットに跳ね返る",
              "position": "left"
            },
            {
              "name": "回復バリア",
              "description": "バリアプロジェクター内の味方を毎秒30ヘルス回復",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Wrecking Ball",
        "nameJa": "レッキングボール",
        "perks": {
          "minor": [
            {
              "name": "スチームローラー",
              "description": "ロール衝撃がタンクに100%追加ダメージ",
              "position": "left"
            },
            {
              "name": "パックラット",
              "description": "ヘルスパックが追加で100ヘルス回復",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ハングタイム",
              "description": "パイルドライバーのチャージ時間が長くなり、空中制御を獲得し、最大50%追加ダメージ",
              "position": "left"
            },
            {
              "name": "適応バリア",
              "description": "アダプティブシールド発動時に1.5秒のバリアを生成",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Zarya",
        "nameJa": "ザリア",
        "perks": {
          "minor": [
            {
              "name": "エネルギー変換",
              "description": "パーティクルキャノンのセカンダリファイアヒットで2エネルギー生成",
              "position": "left"
            },
            {
              "name": "ジャンプアップ",
              "description": "セカンダリファイアのセルフノックバックが75%増加",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "エネルギーランス",
              "description": "パーティクルキャノンのビームが50エネルギー以上で敵を貫通",
              "position": "left"
            },
            {
              "name": "スポッター",
              "description": "プロジェクテッドバリアが味方のヘルス回復を発動し、移動速度を25%増加",
              "position": "right"
            }
          ]
        }
      }
    ],
    "damage": [
      {
        "name": "Genji",
        "nameJa": "ゲンジ",
        "perks": {
          "minor": [
            {
              "name": "素早い斬撃",
              "description": "近接攻撃で風斬りのクールダウンを3秒短縮",
              "position": "left"
            },
            {
              "name": "龍の渇望",
              "description": "龍撃剣の斬撃が30%のライフスティールを獲得",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ブレードツイスティング",
              "description": "敵が半分以下のヘルスの場合、風斬りが25の追加継続ダメージ",
              "position": "left"
            },
            {
              "name": "瞑想",
              "description": "木の葉返し発動中、毎秒35ヘルス回復",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Tracer",
        "nameJa": "トレーサー",
        "perks": {
          "minor": [
            {
              "name": "ブリンクパック",
              "description": "ヘルスパックでブリンクチャージを1回復",
              "position": "left"
            },
            {
              "name": "キネティックリロード",
              "description": "近接ヒットで弾薬を20獲得",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "フラッシュバック",
              "description": "リコールでブリンク回復速度が3秒間150%増加",
              "position": "left"
            },
            {
              "name": "量子もつれ",
              "description": "リコールで50のオーバーヘルスと20弾薬を獲得、時間経過で減衰",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Widowmaker",
        "nameJa": "ウィドウメイカー",
        "perks": {
          "minor": [
            {
              "name": "スコープ効率",
              "description": "スコープショットの弾薬消費が5から3に減少",
              "position": "left"
            },
            {
              "name": "スナイパーの本能",
              "description": "グラップリングフック使用後2秒間、スコープショットのチャージ速度が100%増加",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "エスケーププラン",
              "description": "スコープショットヒットでグラップリングフックのクールダウンを最大4秒短縮",
              "position": "left"
            },
            {
              "name": "シーカーマイン",
              "description": "ヴェノムマインが10m以内の敵に毒ダーツを発射、トリガー後も有効",
              "position": "right"
            }
          ]
        }
      }
    ],
    "support": [
      {
        "name": "Ana",
        "nameJa": "アナ",
        "perks": {
          "minor": [
            {
              "name": "グロッギー",
              "description": "スリープダーツから目覚めた敵は2秒間スローになり50ダメージを受ける",
              "position": "left"
            },
            {
              "name": "スピード血清",
              "description": "ナノブーストがアナと対象に40%の移動速度ブースト",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "ヘッドハンター",
              "description": "バイオティックライフルが敵にクリティカル可能",
              "position": "left"
            },
            {
              "name": "バイオティックバウンス",
              "description": "バイオティックグレネード爆発後、バウンドして再度爆発し60ダメージと回復",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Mercy",
        "nameJa": "マーシー",
        "perks": {
          "minor": [
            {
              "name": "天使の復活",
              "description": "リザレクト使用後にマーシーが100のオーバーヘルスを獲得",
              "position": "left"
            },
            {
              "name": "神聖な勢い",
              "description": "ガーディアンエンジェルキャンセル後、マーシーの移動速度が15%増加",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "チェーンブースト",
              "description": "セカンダリファイアが近くの2人目の味方にリンク",
              "position": "left"
            },
            {
              "name": "フラッシュヒール",
              "description": "カドゥケウスステッフの対象に50ヘルス回復可能、半分以下のヘルスの味方には3倍",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Lúcio",
        "nameJa": "ルシオ",
        "perks": {
          "minor": [
            {
              "name": "サウンドウェーブライダー",
              "description": "ウォールライドで次のサウンドウェーブを強化、ノックバック25%増加、ダメージ50%増加",
              "position": "left"
            },
            {
              "name": "ビートドロップ",
              "description": "サウンドバリア中にアンプイットアップが発動",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "騒音違反",
              "description": "アンプイットアップ発動中、クロスフェードの範囲が150%増加",
              "position": "left"
            },
            {
              "name": "アッチェレランド",
              "description": "アンプイットアップ発動中、ルシオの攻撃速度が50%増加",
              "position": "right"
            }
          ]
        }
      },
      {
        "name": "Zenyatta",
        "nameJa": "ゼニヤッタ",
        "perks": {
          "minor": [
            {
              "name": "超越した非難",
              "description": "トランセンデンス使用中、範囲内のすべての敵に不和のオーブを適用",
              "position": "left"
            },
            {
              "name": "昇天",
              "description": "ダブルジャンプを発動・ホールドして最大3秒間ホバー",
              "position": "right"
            }
          ],
          "major": [
            {
              "name": "集中破壊",
              "description": "セカンダリファイアのチャージが20%速くなり、破壊のオーブを1個追加保存可能",
              "position": "left"
            },
            {
              "name": "デュアルハーモニー",
              "description": "2個目の調和のオーブを獲得、両方とも回復効果70%",
              "position": "right"
            }
          ]
        }
      }
    ]
  }
};
