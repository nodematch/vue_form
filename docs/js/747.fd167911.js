"use strict";(self["webpackChunksample0222"]=self["webpackChunksample0222"]||[]).push([[747],{9616:function(e,t,i){i.d(t,{WD:function(){return d},q2:function(){return a},Sc:function(){return n},du:function(){return c}});var s=i(2482);const d={singleCheck:0,multiCheck:1,result:2};class a{constructor(e){(0,s.Z)(this,"qst",[]),(0,s.Z)(this,"ans",[]),this.qst=e,this.ans=new Array(e.length);for(let t=0;t<this.ans.length;t++)this.ans[t]=-1}}class n{constructor(e){(0,s.Z)(this,"qst",[]),(0,s.Z)(this,"ans",[]),this.qst=e,this.ans=new Array(e.length);for(let t=0;t<this.ans.length;t++)this.ans[t]=[]}}class c{constructor(e){(0,s.Z)(this,"list",[]),this.list=e}}},3747:function(e,t,i){i.d(t,{Ny:function(){return o},$d:function(){return l},cs:function(){return x}});var s=i(9616);const d=new s.q2([{title:"今回のCOVID-19発症日について、最後のワクチン接種との間隔や以前の新型コロナ感染歴との間隔についてお聞きします",message:"以下の条件について、<b>ひとつでも</b>当てはまりますか。<br>・コロナワクチン2回以上接種かつ、最後の接種日から2週間～3か月である<br>・3か月以内に以前の新型コロナウィルス感染歴がある",choices:[{id:0,text:"はい"},{id:1,text:"いいえ、ひとつも当てはまらない"}],next:e=>0==e?{category:s.WD.result,index:0}:{category:s.WD.multiCheck,index:0},paxlo:!1},{title:"発症からどれくらい経過しているか、お聞きします。",message:"day いくつ ですか？<b>（発症日はday 0)</b>",choices:[{id:0,text:"~ day3"},{id:1,text:"day4 ~ 7"}],next:e=>0==e?{category:s.WD.singleCheck,index:2}:{category:s.WD.singleCheck,index:3},paxlo:!1},{title:"症状が比較的落ち着いているか、お聞きします。(day0-3)",message:"以下の条件について、<b>すべて</b>当てはまりますか。<br>・食欲は比較的ある（食事は普段の半分位食べている）<br>・呼吸苦なし、かつ、SpO2≧95",choices:[{id:0,text:"はい、<b>全て</b>当てはまる"},{id:1,text:"いいえ、少なくともひとつは当てはまらない"}],next:e=>0==e?{category:s.WD.singleCheck,index:6}:{category:s.WD.singleCheck,index:8},paxlo:!1},{title:"症状が比較的落ち着いているか、お聞きします。(day4-7)",message:"以下の条件について、<b>すべて</b>当てはまりますか。<br>・食欲は比較的ある（食事は普段の半分位食べている）<br>・呼吸苦なし、かつ、SpO2≧95",choices:[{id:0,text:"はい、<b>全て</b>当てはまる"},{id:1,text:"いいえ、少なくともひとつは当てはまらない"}],next:e=>0==e?{category:s.WD.singleCheck,index:4}:{category:s.WD.singleCheck,index:5},paxlo:!1},{title:"熱や倦怠感の経過を、お聞きします。(day4-7,mild)",message:"熱や倦怠感は、解熱薬服用後でなくとも、明らかに良くなってきていますか？",choices:[{id:0,text:"明らかに良くなってきていて、ほぼ解熱している。"},{id:1,text:"明らかに良くなってきているとは言えない。"}],next:e=>0==e?{category:s.WD.result,index:2}:{category:s.WD.result,index:3},paxlo:!1},{title:"<b>本日の</b>SpO2を確認します(day4-7,#)",message:"<b>手が冷たかったり、マスクをしていると、実際より低い数値になることがあります。</b>マニュキュアやネイルアートをしている場合は、正しく測定できません。",choices:[{id:0,text:"SpO2≧93"},{id:1,text:"SpO2＜93"}],next:e=>0==e?{category:s.WD.result,index:4}:{category:s.WD.result,index:5},paxlo:!1},{title:"腎機能を、お聞きします。(day0-3,mild)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",message:"eGFR≧30 と確認できますか？",choices:[{id:0,text:"eGFR≧30と確認できる"},{id:1,text:"eGFR＜30、あるいは不明"}],next:e=>0==e?{category:s.WD.singleCheck,index:7}:{category:s.WD.result,index:6},paxlo:!1},{title:"服薬中のすべての薬について、お聞きします(day0-3,mild)",message:"<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",choices:[{id:0,text:"すべて、パキロビッドパックの併用禁忌薬でない"},{id:1,text:"併用禁忌薬がある、あるいは確認できない"}],next:e=>0==e?{category:s.WD.result,index:7}:{category:s.WD.result,index:8},paxlo:!0},{title:"<b>本日の</b>SpO2を確認します(day0-3),#",message:"<b>手が冷たかったり、マスクをしていると、実際より低い数値になることがあります。</b>マニュキュアやネイルアートをしている場合は、正しく測定できません。",choices:[{id:0,text:"SpO2≧93"},{id:1,text:"SpO2＜93"}],next:e=>0==e?{category:s.WD.singleCheck,index:9}:{category:s.WD.result,index:9},paxlo:!1},{title:"腎機能を、お聞きします。(day0-3,#)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",message:"eGFR≧30 と確認できますか？",choices:[{id:0,text:"eGFR≧30と確認できる"},{id:1,text:"eGFR＜30、あるいは不明"}],next:e=>0==e?{category:s.WD.singleCheck,index:10}:{category:s.WD.result,index:10},paxlo:!1},{title:"服薬中のすべての薬について、お聞きします(day0-3,#)",message:"<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",choices:[{id:0,text:"すべて、パキロビッドパックの併用禁忌薬でない"},{id:1,text:"併用禁忌薬がある、あるいは確認できない"}],next:e=>0==e?{category:s.WD.result,index:11}:{category:s.WD.result,index:12},paxlo:!0}]),a=new s.q2([{title:"今回のCOVID-19発症日について、最後のワクチン接種との間隔や以前の新型コロナ感染歴との間隔についてお聞きします",message:"以下の条件について、<b>ひとつでも</b>当てはまりますか。<br>・コロナワクチン2回以上接種かつ、最後の接種日から2週間～3か月である<br>・3か月以内に以前の新型コロナウィルス感染歴がある",choices:[{id:0,text:"はい"},{id:1,text:"いいえ、ひとつも当てはまらない"}],next:e=>0==e?{category:s.WD.result,index:0}:{category:s.WD.multiCheck,index:0},paxlo:!1},{title:"発症からどれくらい経過しているか、お聞きします。",message:"day いくつ ですか？<b>（発症日はday 0)</b>",choices:[{id:0,text:"~ day3"},{id:1,text:"day4 ~ 7"}],next:e=>0==e?{category:s.WD.singleCheck,index:2}:{category:s.WD.singleCheck,index:3},paxlo:!1},{title:"症状が比較的落ち着いているか、お聞きします。(day0-3)",message:"以下の条件について、<b>すべて</b>当てはまりますか。<br>・食欲は比較的ある（食事は普段の半分位食べている）<br>・呼吸苦なし、かつ、SpO2≧95",choices:[{id:0,text:"はい、<b>全て</b>当てはまる"},{id:1,text:"いいえ、少なくともひとつは当てはまらない"}],next:e=>0==e?{category:s.WD.singleCheck,index:4}:{category:s.WD.singleCheck,index:5},paxlo:!1},{title:"症状が比較的落ち着いているか、お聞きします。(day4-7)",message:"以下の条件について、<b>すべて</b>当てはまりますか。<br>・食欲は比較的ある（食事は普段の半分位食べている）<br>・呼吸苦なし、かつ、SpO2≧95",choices:[{id:0,text:"はい、<b>全て</b>当てはまる"},{id:1,text:"いいえ、少なくともひとつは当てはまらない"}],next:e=>0==e?{category:s.WD.singleCheck,index:6}:{category:s.WD.singleCheck,index:7},paxlo:!1},{title:"腎機能を、お聞きします。(day0-3,mild)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",message:"eGFR≧30 と確認できますか？",choices:[{id:0,text:"eGFR≧30と確認できる"},{id:1,text:"eGFR＜30、あるいは不明"}],next:e=>0==e?{category:s.WD.singleCheck,index:8}:{category:s.WD.result,index:2},paxlo:!1},{title:"<b>本日の</b>SpO2を確認します(day0-3),#",message:"<b>手が冷たかったり、マスクをしていると、実際より低い数値になることがあります。</b>マニュキュアやネイルアートをしている場合は、正しく測定できません。",choices:[{id:0,text:"SpO2≧93"},{id:1,text:"SpO2＜93"}],next:e=>0==e?{category:s.WD.singleCheck,index:9}:{category:s.WD.result,index:4},paxlo:!1},{title:"熱や倦怠感の経過を、お聞きします。(day4-7,mild)",message:"熱や倦怠感は、解熱薬服用後でなくとも、明らかに良くなってきていますか？",choices:[{id:0,text:"明らかに良くなってきていて、ほぼ解熱している。"},{id:1,text:"明らかに良くなってきているとは言えない。"}],next:e=>0==e?{category:s.WD.result,index:5}:{category:s.WD.singleCheck,index:11},paxlo:!1},{title:"<b>本日の</b>SpO2を確認します(day4-7),#",message:"<b>手が冷たかったり、マスクをしていると、実際より低い数値になることがあります。</b>マニュキュアやネイルアートをしている場合は、正しく測定できません。",choices:[{id:0,text:"SpO2≧93"},{id:1,text:"SpO2＜93"}],next:e=>0==e?{category:s.WD.singleCheck,index:11}:{category:s.WD.result,index:7},paxlo:!1},{title:"服薬中のすべての薬について、お聞きします(day0-3,mild)",message:"<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",choices:[{id:0,text:"すべて、パキロビッドパックの併用禁忌薬でない"},{id:1,text:"併用禁忌薬がある、あるいは確認できない"}],next:e=>0==e?{category:s.WD.result,index:3}:{category:s.WD.result,index:2},paxlo:!0},{title:"腎機能を、お聞きします。(day0-3,#)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",message:"eGFR≧30 と確認できますか？",choices:[{id:0,text:"eGFR≧30と確認できる"},{id:1,text:"eGFR＜30、あるいは不明"}],next:e=>0==e?{category:s.WD.singleCheck,index:10}:{category:s.WD.result,index:4},paxlo:!1},{title:"服薬中のすべての薬について、お聞きします(day0-3,#)",message:"<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",choices:[{id:0,text:"すべて、パキロビッドパックの併用禁忌薬でない"},{id:1,text:"併用禁忌薬がある、あるいは確認できない"}],next:e=>0==e?{category:s.WD.result,index:3}:{category:s.WD.result,index:4},paxlo:!0},{title:"発症からどれくらい経過しているか、改めてお聞きします。",message:"day いくつ ですか？<b>（発症日はday 0)</b>",choices:[{id:0,text:"day4"},{id:1,text:"day5-7"}],next:e=>0==e?{category:s.WD.singleCheck,index:12}:{category:s.WD.result,index:7},paxlo:!1},{title:"腎機能を、お聞きします。(day4)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",message:"eGFR≧30 と確認できますか？",choices:[{id:0,text:"eGFR≧30と確認できる"},{id:1,text:"eGFR＜30、あるいは不明"}],next:e=>0==e?{category:s.WD.singleCheck,index:13}:{category:s.WD.result,index:7},paxlo:!1},{title:"服薬中のすべての薬について、お聞きします(day4)",message:"<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",choices:[{id:0,text:"すべて、パキロビッドパックの併用禁忌薬でない"},{id:1,text:"併用禁忌薬がある、あるいは確認できない"}],next:e=>0==e?{category:s.WD.result,index:6}:{category:s.WD.result,index:7},paxlo:!0}]),n=new s.Sc([{title:"重症化リスク因子があるか、お聞きします。",message:"あてはまる因子を、すべて選んでください。(ない場合はそのまま進んで下さい)<br> * は特に重い因子",choices:[{id:0,text:"60歳以上"},{id:1,text:"COPD, ステロイド吸入を要するBA *"},{id:2,text:"CKD"},{id:3,text:"治療が必要な糖尿病"},{id:4,text:"高血圧、高脂血症"},{id:5,text:"活動性の悪性腫瘍 *"},{id:6,text:" 肥満（BMI≧25）"},{id:7,text:"喫煙（過去30日以内）"},{id:8,text:"24週以後の妊婦"},{id:9,text:"14日以上のステロイド（PSL20mg/d相当）、生物学的製剤、免疫調整薬（メトトレキサート、メルカプトリン、アザチオプリン等）の長期投与"},{id:10,text:"HIV感染症、骨髄・臓器移植、原発性免疫不全 *"},{id:11,text:"うっ血性心不全、心筋症 *"},{id:12,text:"心血管系疾患の既往（脳梗塞、心筋梗塞、狭心症、閉塞性動脈硬化症等） *"},{id:13,text:"慢性神経疾患（認知症、脳卒中、てんかんを含む） *"},{id:14,text:"重度の精神疾患、重度の学習障害、脳性麻痺"},{id:15,text:"ダウン症、遺伝性疾患"},{id:16,text:"重度の肝疾患（肝硬変等）"},{id:17,text:"医療技術への常態化した依存（NIPPV等） *"}],next:e=>0==e.length?{category:s.WD.result,index:1}:{category:s.WD.multiCheck,index:1}},{title:"特にリスクが高いと考えられる因子について、さらにお聞きします。",message:"あてはまる因子を、すべて選んでください。(ない場合はそのまま進んで下さい)",choices:[{id:0,text:"70代男性、80代以上男女"},{id:1,text:"高度のCKD（eGFR ＜30相当)"},{id:2,text:"コントロール不良DM（A1c＞8相当）"},{id:3,text:"高度の肥満（BMI≧30）"},{id:4,text:"60代男性プラスアルファ（HT、 HL、治療を要するDM、喫煙、BMI≧25）"}],next:e=>({category:s.WD.singleCheck,index:1})}]),c=new s.du([{title:"ワクチン等の重症化予防効果等を期待し、経過を見てください",message:"ただし、ワクチンや罹患後の重症化予防効果が、現在の流行株にいつまで続くかは、はっきりはわかっていません。<b>day4以後（発症から5日目以後）でも、症状（特に熱や食欲・倦怠感）の改善がない場合は、初期治療薬投与を再検討してください。</b>",addition:"noPrint"},{title:"スクリーニングの対象外です",message:"リスク因子なし",addition:"noPrint"},{title:"経過観察でよいと考えます",message:"ただし、症状悪化しないか、フォローしてください。",addition:"noPrint"},{title:"直ちに、ゼビュディ（中和抗体療法、点滴）投与を検討してください。<br>代替薬として、ベクルリー（抗ウイルス薬、連日点滴、入院）があります。",message:"<b>ゼビュディはday7以内</b>（発症から8日目まで）、SpO2≧93が必要です。投与が早いほど<b>（特にday5以内）</b>、効果を期待できると考えられています。",medicine:"直ちにゼビュディ",addition:"ベクルリー"},{title:"直ちに、ゼビュディ（中和抗体療法、点滴）投与を検討してください。<br>代替薬として、ベクルリー（抗ウイルス薬、連日点滴、入院）があります。",message:"<b>ゼビュディはday7以内</b>（発症から8日目まで）、SpO2≧93が必要です。投与が早いほど<b>（特にday5以内）</b>、効果を期待できると考えられています。",medicine:"直ちにゼビュディ",addition:"ベクルリー"},{title:"直ちに入院し、ベクルリー投与（抗ウイルス薬、連日点滴、入院）が必要な可能性があります。",message:"ベクルリーは、SpO2＜93でも投与できます。投与開始が早いほど、効果を期待できると考えられています。しかし、高流量酸素の必要な患者には使用できません。保険適応は、現在中等症１（酸素投与不要のCOVID-19肺炎）。",medicine:"直ちに入院しベクルリー"},{title:"ラゲブリオ（内服、1日2回 5日間）を推奨します。",message:"<b>day5</b> 以内（発症から6日目まで）に開始。<br>※カプセルは、長さ21.7㎜、直径7.7㎜、1回分は４カプセル。嚥下障害があると、服薬が難しいかもしれません。<br>※認知症の独居等で、介護者等の毎日の服薬支援がない場合➡介護者付添いの上で、ゼビュディ投与について検討してください。<br>※明らかに症状（熱や食欲・倦怠感）が軽快している場合は、経過観察でよいと考えます。症状悪化しないか、フォローしてください。<br><br>ラゲブリオが投与できない者①18歳未満②妊婦 は別の薬を検討してください。<br>☞パキロビッドパックの適応: day5 以内（発症から6日目まで）に開始、eGFR≧30, 併用禁忌薬がない、SpO2≧93<br>☞ゼビュディの適応: day7以内（発症から7日目まで）に投与、SpO2≧93",medicine:"ラゲブリオ"},{title:"パキロビッドパック（内服、1日2回 5日間）を推奨します<br>代替薬として、ゼビュディも検討されます。",message:"<b>day5以内</b>（発症から6日目まで）に服薬開始。開始が早いほど、効果を期待できると考えられています。<br><br>※認知症の独居等で、服薬サポートがない場合は、ゼビュディ投与（介護者付添いの上）について検討してください。<br>※明らかに症状（熱や食欲・倦怠感）が軽快していれば、経過観察でよいと考えます。症状悪化しないか、フォローしてください。<br>※妊婦・授乳婦は有益性投与",medicine:"パキロビッドパック",addition:"ゼビュディ"},{title:"ラゲブリオ（内服、1日2回 5日間）を推奨します。",message:"<b>day5</b> 以内（発症から6日目まで）に開始。<br>※カプセルは、長さ21.7㎜、直径7.7㎜、1回分は４カプセル。嚥下障害があると、服薬が難しいかもしれません。<br>※認知症の独居等で、介護者等の毎日の服薬支援がない場合➡介護者付添いの上で、ゼビュディ投与について検討してください。<br>※明らかに症状（熱や食欲・倦怠感）が軽快している場合は、経過観察でよいと考えます。症状悪化しないか、フォローしてください。<br><br>ラゲブリオが投与できない者①18歳未満②妊婦 は別の薬を検討してください。<br>☞パキロビッドパックの適応: day5 以内（発症から6日目まで）に開始、eGFR≧30, 併用禁忌薬がない、SpO2≧93<br>☞ゼビュディの適応: day7以内（発症から7日目まで）に投与、SpO2≧93",medicine:"ラゲブリオ"},{title:"直ちに入院し、ベクルリー投与（抗ウイルス薬、連日点滴、入院）が必要な可能性があります。",message:"ベクルリーは、SpO2＜93でも投与できます。投与開始が早いほど、効果を期待できると考えられています。しかし、高流量酸素の必要な患者には使用できません。保険適応は、現在中等症１（酸素投与不要のCOVID-19肺炎）。",medicine:"直ちに入院しベクルリー"},{title:"直ちに、ゼビュディ（中和抗体療法、点滴）投与を検討してください。<br>代替薬として、ベクルリー（抗ウイルス薬、連日点滴、入院）があります。",message:"<b>ゼビュディはday7以内</b>（発症から8日目まで）、SpO2≧93が必要です。投与が早いほど<b>（特にday5以内）</b>、効果を期待できると考えられています。",medicine:"直ちにゼビュディ",addition:"ベクルリー"},{title:"直ちに、パキロビッドパック投与が必要な可能性を考えます。",message:"パキロビッドパックは<b>day5以内</b>（発症から6日目まで）に開始、SpO2≧93が必要です。<br>投与開始は早いほど、効果が期待できると考えられています。",medicine:"直ちにパキロビッドパック"},{title:"直ちに、ゼビュディ（中和抗体療法、点滴）投与を検討してください。<br>代替薬として、ベクルリー（抗ウイルス薬、連日点滴、入院）があります。",message:"<b>ゼビュディはday7以内</b>（発症から8日目まで）、SpO2≧93が必要です。投与が早いほど<b>（特にday5以内）</b>、効果を期待できると考えられています。",medicine:"直ちにゼビュディ",addition:"ベクルリー"}]),r=new s.du([{title:"ワクチン等の重症化予防効果等を期待し、経過を見てください",message:"ただし、ワクチンや罹患後の重症化予防効果が、現在の流行株にいつまで続くかは、はっきりはわかっていません。<b>day4以後（発症から5日目以後）でも、症状（特に熱や食欲・倦怠感）の改善がない場合は、初期治療薬投与を再検討してください。</b>",addition:"noPrint"},{title:"スクリーニングの対象外です",message:"リスク因子なし",addition:"noPrint"},{title:"ラゲブリオ（内服、1日2回 5日間）を推奨します。",message:"<b>day5</b> 以内（発症から6日目まで）に開始。<br>※カプセルは、長さ21.7㎜、直径7.7㎜、1回分は４カプセル。嚥下障害があると、服薬が難しいかもしれません。<br>※認知症の独居等で、介護者等の毎日の服薬支援がない場合➡ベクルリーについても検討してください。<br>※明らかに症状（熱や食欲・倦怠感）が軽快している場合は、経過観察でよいと考えます。症状悪化しないか、フォローしてください。<br><br>ラゲブリオが投与できない者①18歳未満②妊婦 は別の薬を検討してください。<br>☞パキロビッドパックの適応: day5 以内（発症から6日目まで）に開始、eGFR≧30, 併用禁忌薬がない、SpO2≧93<br>☞ベクルリー（点滴、連日投与）の適応: day7以内（発症から7日目まで）に投与",medicine:"ラゲブリオ"},{title:"パキロビッドパック（内服、1日2回 5日間）を推奨します<br>代替薬として、ベクルリー（点滴、連日投与）があります。",message:"<b>day5以内</b>（発症から6日目まで）に服薬開始。開始が早いほど、効果を期待できると考えられています。<br><br>※認知症の独居等で、服薬サポートがない場合は、ベクルリー投与（点滴、連日投与）についても検討してください。<br>※明らかに症状（熱や食欲・倦怠感）が軽快していれば、経過観察でよいと考えます。症状悪化しないか、フォローしてください。<br>※妊婦・授乳婦は有益性投与",medicine:"パキロビッドパック"},{title:"ベクルリー投与（点滴、連日投与）が必要な可能性を考えます。",message:"ベクルリーは、SpO2＜93でも投与できます。投与開始が早いほど、効果を期待できると考えられています。しかし、高流量酸素の必要な患者には使用できません。保険適応は、現在中等症１（酸素投与不要のCOVID-19肺炎）。",medicine:"ベクルリー"},{title:"経過観察でよいと考えます",message:"ただし、症状悪化しないか、フォローしてください。",addition:"noPrint"},{title:"直ちに、パキロビッドパック投与が必要な可能性があります。",message:"パキロビッドパックは<b>day5以内</b>（発症から6日目まで）に開始、SpO2≧93が必要です。<br>投与開始は早いほど、効果が期待できると考えられています。",medicine:"直ちにパキロビッドパック"},{title:"直ちに入院し、ベクルリー投与（点滴、連日投与）が必要な可能性があります。",message:"ベクルリーは、SpO2＜93でも投与できます。投与開始が早いほど、効果を期待できると考えられています。しかし、高流量酸素の必要な患者には使用できません。保険適応は、現在中等症１（酸素投与不要のCOVID-19肺炎）。",medicine:"直ちに入院しベクルリー"}]),x={omicron:{single:d.qst,multi:n.qst,result:c.list},ba2:{single:a.qst,multi:n.qst,result:r.list}},l={omicron:{single:d.ans,multi:n.ans},ba2:{single:a.ans,multi:n.ans}},o=e=>"?type=ba2"==e?"ba2":"?type=omicron"==e?(window.location.href="https://nodematch.github.io/404.html","omicron"):(window.location.href="https://nodematch.github.io/404.html","ba2")},2482:function(e,t,i){function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=747.fd167911.js.map