/* АНГИ ДЭМ 97 — гурван үндсэн булангийн навигаци.
   index.html файлыг солихгүй; <script src="hubs.js"></script> мөрөөр холбоно. */
(function initAngidem97ThreeHubs(){
  if (window.__angidem97ThreeHubsV1) return;
  window.__angidem97ThreeHubsV1 = true;

  var nav = document.querySelector('nav');
  var dashboard = document.getElementById('dashboard');
  var report = document.getElementById('report');
  if (!nav || !dashboard || !report || typeof window.show !== 'function') return;

  function addSection(id, html) {
    var section = document.createElement('section');
    section.id = id;
    section.className = 'hidden';
    section.innerHTML = html;
    dashboard.parentNode.insertBefore(section, dashboard);
    return section;
  }

  addSection('healthHub',
    '<div class="card hero"><h1>💚 Эрүүл мэндийн булан</h1><p>Багш, ажилтны сайн сайхан байдал, ядаргаа, нойр, стрессийг анзаарч, шаардлагатай үед тохирсон дэмжлэг авахад зориулсан мэдээлэл.</p><div class="notice"><b>Нууцлал:</b> Тандалтын хариулт нь онош биш. Хувийн мэдээллийг нууцалж, сайн дурын оролцоог баримтална.</div></div>' +
    '<div class="grid3">' +
    '<div class="card"><h3>📝 Шүүгч, багш нарын тандалт</h3><p class="small">Ядаргаа, нойр, өдөр тутмын үйл ажиллагааны асуулга.</p><button class="btn secondary" data-hub-section="judgeSurvey">Тандалт бөглөх</button></div>' +
    '<div class="card"><h3>📊 Тандалтын хариултын тайлан</h3><p class="small">Хадгалсан хариултыг бүтэн асуулттай нь харах.</p><button class="btn secondary" data-hub-href="judge-report.html">Тайлан нээх</button></div>' +
    '<div class="card"><h3>🌿 Өөрийгөө дэмжих</h3><p>Амралт, нойр, ажлын ачааллаа анзаарч, удаан үргэлжилсэн зовиурын үед мэргэжлийн хүнээс зөвлөгөө аваарай.</p><p class="small">Энэ мэдээлэл эмнэлгийн зөвлөгөө, онош орлохгүй.</p></div>' +
    '</div>');

  addSection('teacherSupport',
    '<div class="card hero"><h1>💡 Хүүхдээ дэмжих 3 минут</h1><p>Урт заавар унших шаардлагагүй. Түвшнээ сонгоод өнөөдөр хийх нэг алхмаа аваарай.</p><div class="notice"><b>Санамж:</b> Өнгө нь онош биш, анхаарах дохио юм. Үр дүнг бодит ажиглалт, хүүхэдтэй хийх тайван ярилцлагатай хамтатгана.</div><button type="button" class="btn secondary" data-hub-section="teacherHub">← Багшийн булан руу буцах</button></div>' +
    '<div class="card"><h2>🎬 Богино сургалтын видеонууд</h2><p class="small">Хүүхдийн зан байдал, сэтгэл хөдлөлийн онцлогт тохируулан нэг богино видео сонгоорой. Үзээд хүүхэдтэйгээ шууд ажиллах нэг аргыг хэрэглэнэ.</p><div class="grid3">' +
    '<div class="card" style="margin:0"><h3>🤝 Ичимхий, ганцаардсан хүүхэд</h3><p class="small">Итгэлцэл бий болгож, хүчлэхгүй дэмжих</p><video controls preload="metadata" playsinline style="width:100%;aspect-ratio:16/9;border-radius:12px;background:#111" src="behavior-shy-voice.mp4"></video></div>' +
    '<div class="card" style="margin:0"><h3>🌿 Сандарч, түгшсэн хүүхэд</h3><p class="small">Тайван сонсож, аюулгүй мэдрэмж өгөх</p><video controls preload="metadata" playsinline style="width:100%;aspect-ratio:16/9;border-radius:12px;background:#111" src="behavior-anxiety-voice.mp4"></video></div>' +
    '<div class="card" style="margin:0"><h3>📚 Хичээлдээ идэвхгүй хүүхэд</h3><p class="small">Даалгаврыг жижиг алхамд хуваах</p><video controls preload="metadata" playsinline style="width:100%;aspect-ratio:16/9;border-radius:12px;background:#111" src="behavior-learning-voice.mp4"></video></div>' +
    '<div class="card" style="margin:0"><h3>💬 Уурлаж, маргалддаг хүүхэд</h3><p class="small">Тайван харилцаж, мэдрэмжийг нь сонсох</p><video controls preload="metadata" playsinline style="width:100%;aspect-ratio:16/9;border-radius:12px;background:#111" src="behavior-conflict-voice.mp4"></video></div>' +
    '<div class="card" style="margin:0"><h3>🛟 Сэтгэл зүйчтэй уулзахаас татгалзсан хүүхэд</h3><p class="small">Хүчлэхгүй сонсож, дэмжлэгийг үргэлжлүүлэх</p><video controls preload="metadata" playsinline style="width:100%;aspect-ratio:16/9;border-radius:12px;background:#111" src="behavior-refusal-voice.mp4"></video></div>' +
    '</div><p class="small">Эдгээр видео нь багшид чиг баримжаа өгөх зориулалттай. Тандалтын өнгө нь онош биш; хүүхдийн бодит нөхцөл байдлыг давхар харгалзана.</p></div>' +
    '<div class="card"><h2>🟢 Ногоон — Сайн дадлыг дэмжих</h2><p><b>Өнөөдөр хийх нэг зүйл:</b> Хүүхдийн хичээл зүтгэл эсвэл бусдад үзүүлсэн тусыг нь тодорхой хэлж урамшуул.</p><div class="notice"><b>Ингэж хэлээрэй:</b> “Чи өнөөдөр найздаа тусалсан нь сайхан байлаа.”</div><details><summary>Өөр нэг богино санаа</summary><p>Хичээлийн төгсгөлд “Өнөөдөр юу нь сайн болсон бэ?” гэж асуугаад, хүүхдийн хариултыг сонс.</p></details></div>' +
    '<div class="card"><h2>🟡 Шар — Ангийн багшийн дэмжлэг</h2><p><b>1. Тайван ярилц.</b> Хүүхдийн яриаг таслалгүй сонс.</p><p><b>2. Нэг жижиг зорилго тохир.</b> Маргааш хийж болох бодит алхам сонго.</p><p><b>3. Ахиц ажигла.</b> Хэд хоногийн дараа тохирсон алхам хэр болсон талаар эргэн асуу.</p><div class="notice"><b>Ингэж асуугаарай:</b> “Сүүлийн үед юу хамгийн хэцүү байна? Би юугаар тусалж болох вэ?”</div><p class="small">Хүндрэл үргэлжилж, нэмэгдэж байвал сургуулийн сэтгэл зүйчтэй зөвлөлдөнө.</p></div>' +
    '<div class="card"><h2>🔴 Улаан — Нэмэлт дэмжлэг зохион байгуулах</h2><p><b>1. Нөхцөл байдлыг нягтал.</b> Тандалтын хариуг багшийн ажиглалттай хамтатгаж, хүүхэдтэй нууцлалыг хүндэтгэсэн орчинд ярилц.</p><p><b>2. Сургуулийн сэтгэл зүйчтэй холбохыг дэмж.</b> Хүүхдийн болон гэр бүлийн санаа зовнилыг хүчлэхгүй сонс.</p><p><b>3. Дэмжлэгийг үргэлжлүүл.</b> Уулзалт хойшилсон эсвэл татгалзсан ч хүүхдийг орхигдуулахгүй. Сургуулийн холбогдох журам, хүүхэд хамгааллын хариуцсан ажилтны чиглэлийг дагана.</p><div class="notice"><b>Ингэж хэлж болно:</b> “Чамайг хүчлэх гэсэнгүй. Юу тухгүй санагдаж байгааг сонсмоор байна. Бид хамтдаа тохиромжтой дараагийн алхмаа ярилцъя.”</div><details><summary>Эцэг эх зөвшөөрөхгүй эсвэл хүүхэд уулзахыг хүсэхгүй бол</summary><p>Татгалзаж буй шалтгааныг хүндэтгэлтэй тодруулж, багшийн хүрээнд аюулгүй дэмжлэгээ үргэлжлүүлэн, сургуулийн сэтгэл зүйч болон холбогдох хариуцсан ажилтантай сургуулийн журмын дагуу зөвлөлдөнө. Хүүхдийн аюулгүй байдалд шууд эрсдэл байвал яаралтай хамгааллын журмыг мөрдөнө.</p></details></div>' +
    '<div class="card"><h3>✓ Багшийн санах 3 зүйл</h3><p>Хүүхдийг өнгөөр нь шошголохгүй. Зөвхөн тандалтын оноогоор оношлохгүй. Урт тайлангаас илүү хүүхэдтэй бодитоор ярилцаж, ахицыг ажигла.</p></div>');

  addSection('teacherHub',
    '<div class="card hero"><h1>👩‍🏫 Анги удирдсан багш нарын булан</h1><p>Сурагчдыг таньж ойлгох, ангийн орчныг төлөвлөх, хэрэгцээг ажиглаж тохирсон дэмжлэг үзүүлэх хэрэгслүүд нэг дор.</p><div class="notice"><b>Санамж:</b> Тандалт, темпераментын асуулга нь онош биш. Ажиглалт, сурагчтай ярилцах, гэр бүл болон мэргэжилтэнтэй хамтрахыг хослуулна.</div></div>' +
    '<div class="grid3">' +
    '<div class="card"><h3>💡 Хүүхдээ дэмжих 3 минут</h3><p class="small">Ногоон, шар, улаан түвшинд багшийн хийх нэг энгийн алхам.</p><button class="btn" data-hub-section="teacherSupport">Богино зөвлөмж үзэх</button></div>' +
    '<div class="card"><h3>🧠 Темперамент ба хөгжлийн дэмжлэг</h3><p class="small">Өөрийгөө таних асуулга, хөгжлийн онцлогтой сурагчийг дэмжих гарын авлага.</p><button class="btn secondary" data-hub-href="temperament-support.html">Нээх</button></div>' +
    '<div class="card"><h3>⚡ Шуурхай үнэлгээ</h3><p class="small">Сурагчийн анхаарах чиглэлийг урьдчилан ажиглах хэрэгсэл.</p><button class="btn secondary" data-hub-section="test">Үнэлгээ эхлүүлэх</button></div>' +
    '<div class="card"><h3>👥 Сурагчдын мэдээлэл</h3><button class="btn secondary" data-hub-section="students">Нээх</button></div>' +
    '<div class="card"><h3>📋 Сурагчийн тандалт</h3><p class="small">Дасан зохицол, харилцаа, суралцах байдал, сэтгэл хөдлөл.</p><button class="btn secondary" data-hub-survey="student">Асуулга нээх</button></div>' +
    '<div class="card"><h3>📊 Ангийн нэгдсэн тайлан</h3><button class="btn secondary" data-hub-section="report">Тайлан нээх</button></div>' +
    '<div class="card"><h3>⚙️ Асуултын сан</h3><button class="btn secondary" data-hub-section="questionsAdmin">Асуултын сан нээх</button></div>' +
    '<div class="card"><h3>ℹ️ Танилцуулга / Холбоо барих</h3><button class="btn secondary" data-hub-section="about">Нээх</button></div>' +
    '</div>');

  addSection('parentHub',
    '<div class="card hero"><h1>👨‍👩‍👧 Эцэг эхчүүдэд зориулсан булан</h1><p>Хүүхдийн дасан зохицол, суралцах дадал, харилцаа, аюулгүй байдлыг ойлгож, сургуультай хамтран дэмжихэд зориулсан булан.</p><div class="notice"><b>Нууцлал:</b> Хүүхдийн код, хариултыг нийтэд зарлахгүй. Нэг удаагийн хариугаар эцсийн дүгнэлт хийхгүй.</div></div>' +
    '<div class="grid3">' +
    '<div class="card"><h3>📝 Эцэг эхийн тандалт</h3><p class="small">Хүүхдийн дасан зохицол, суралцах орчин, тулгарч буй бэрхшээлийн талаар эцэг эхийн ажиглалт.</p><button class="btn secondary" data-hub-survey="parent">Асуулга нээх</button></div>' +
    '<div class="card"><h3>💬 Хүүхэдтэйгээ ярилцах</h3><p>Өдөр бүр тайван, шүүмжлэлгүй ярилцаж, юу нь амархан, юу нь хэцүү байсныг асуун, хүүхдийн хариултыг таслалгүй сонсоорой.</p></div>' +
    '<div class="card"><h3>📚 Суралцах дадлыг дэмжих</h3><p>Даалгаврыг жижиг алхамд хувааж, завсарлага болон тогтмол цаг тохир. Хичээл зүтгэлийг нь үнэлээрэй.</p></div>' +
    '<div class="card"><h3>🤝 Сургуультай хамтрах</h3><p>Асуудал давтагдвал багштай нууцлалтай ярилцаж, гэр болон сургуульд ажиглагдсан зүйлсийг хуваалц.</p></div>' +
    '<div class="card"><h3>📱 Дэлгэцийн хэрэглээ</h3><p>Гэр бүлээрээ тохирсон цаг, дэлгэцгүй үе, нойр болон хөдөлгөөний дадлыг төлөвлө.</p></div>' +
    '<div class="card"><h3>🌱 Хүүхдийн давуу тал</h3><p>Сонирхол, амжилт, дуртай үйл ажиллагааг нь анзаарч дэмж. Бусад хүүхэдтэй бүү харьцуул.</p></div>' +
    '</div>');

  var topButtons = {};
  function addTopButton(text, sectionId) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    button.addEventListener('click', function(){ window.show(sectionId, button); });
    nav.appendChild(button);
    topButtons[sectionId] = button;
  }

  nav.innerHTML = '';
  addTopButton('🏠 Нүүр', 'dashboard');
  addTopButton('ℹ️ Сайтын танилцуулга', 'about');
   addTopButton('💚 Эрүүл мэндийн булан', 'healthHub');
  addTopButton('👩‍🏫 Багшийн булан', 'teacherHub');
  addTopButton('👨‍👩‍👧 Эцэг эхийн булан', 'parentHub');

  function navigateFromHub(sectionId, hubId) {
    window.show(sectionId, null);
    nav.querySelectorAll('button').forEach(function(button){ button.classList.remove('active'); });
    if (topButtons[hubId]) topButtons[hubId].classList.add('active');
    window.scrollTo(0, 0);
  }

  document.querySelectorAll('[data-hub-section]').forEach(function(button){
    button.addEventListener('click', function(){
      var hubId = button.closest('#healthHub') ? 'healthHub' : (button.closest('#parentHub') ? 'parentHub' : 'teacherHub');
      navigateFromHub(button.getAttribute('data-hub-section'), hubId);
    });
  });
  document.querySelectorAll('[data-hub-href]').forEach(function(button){
    button.addEventListener('click', function(){
      var target = button.getAttribute('data-hub-href');
      if (target === 'judge-report.html') {
        window.location.href = target + '?refresh=' + Date.now();
      } else {
        window.location.href = target;
      }
    });
  });
  document.querySelectorAll('[data-hub-survey]').forEach(function(button){
    button.addEventListener('click', function(){
      var role = button.getAttribute('data-hub-survey');
      var hubId = role === 'parent' ? 'parentHub' : 'teacherHub';
      navigateFromHub('survey', hubId);
      if (typeof window.backToSurveyRoles === 'function') window.backToSurveyRoles();
      if (typeof window.openSurveyRole === 'function') window.openSurveyRole(role);
    });
  });
})();
