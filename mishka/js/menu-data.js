/* ============================================================
 МЕНЮ КАВ’ЯРНІ «МИШКА»
 Щоб змінити ціну, назву чи опис, відредагуйте рядок позиції нижче.
   price  — ціна в гривнях (лише число)
   image  — шлях до фото (квадрат ~800×800, папка img/menu/)
   tag    — "Хіт", "Новинка", "Веган" або порожньо ""
   popular: true — позиція з’явиться в блоці «Що замовляють найчастіше» на головній (бажано 4 шт.)
 Зберігайте лапки й коми, як у прикладах.
 ============================================================ */
window.MISHKA_MENU = {
  categories: [
    {
      id: "coffee",
      title: "Кава",
      short: "Кава",
      note: "Обсмаження щотижня від українських обсмажувачів. Будь-який напій можна на рослинному молоці.",
      items: [
        { name: "Еспресо", price: 60, volume: "30 мл", description: "Насичений шот зі щільною карамельною кремою", image: "img/menu/espresso.webp", tag: "", category: "coffee" },
        { name: "Допіо", price: 75, volume: "60 мл", description: "Подвійний еспресо для тих, хто прокидається повільно", image: "img/menu/doppio.webp", tag: "", category: "coffee" },
        { name: "Американо", price: 65, volume: "250 мл", description: "Еспресо з гарячою водою, м’який і чистий смак", image: "img/menu/americano.webp", tag: "", category: "coffee" },
        { name: "Капучино", price: 85, volume: "250 мл", description: "Еспресо з оксамитовою молочною піною", image: "img/menu/cappuccino.webp", tag: "Хіт", category: "coffee" },
        { name: "Лате", price: 95, volume: "350 мл", description: "Ніжне молоко і трохи еспресо, легко й затишно", image: "img/menu/latte.webp", tag: "", category: "coffee" },
        { name: "Флет вайт", price: 90, volume: "200 мл", description: "Подвійний ристрето з тонким шаром мікропіни", image: "img/menu/flat-white.webp", tag: "", category: "coffee" },
        { name: "Раф ванільний", price: 110, volume: "300 мл", description: "Вершковий кавовий напій з натуральною ваніллю", image: "img/menu/raf.webp", tag: "", category: "coffee" },
        { name: "Медовий лате «Мишка»", price: 115, volume: "350 мл", description: "Лате з квітковим медом і щіпкою кориці", image: "img/menu/honey-latte-mishka.webp", tag: "Хіт", category: "coffee" },
        { name: "Раф «Бурий ведмідь»", price: 125, volume: "300 мл", description: "Вершковий раф із халвою та солоною карамеллю", image: "img/menu/raf-buryi-vedmid.webp", tag: "Новинка", popular: true, category: "coffee" }
      ]
    },
    {
      id: "tea",
      title: "Чай та інші напої",
      short: "Чай і напої",
      note: "Листовий чай, матча, домашні лимонади та шоколад для холодних вечорів.",
      items: [
        { name: "Чорний чай «Ассам»", price: 70, volume: "500 мл", description: "Міцний листовий чай із солодовими нотами", image: "img/menu/tea-black.webp", tag: "", category: "tea" },
        { name: "Зелений чай із жасмином", price: 75, volume: "500 мл", description: "Делікатний зелений чай з квітковим ароматом", image: "img/menu/tea-green-jasmine.webp", tag: "", category: "tea" },
        { name: "Карпатський трав’яний збір", price: 80, volume: "500 мл", description: "Чебрець, м’ята й липа з українських гір", image: "img/menu/tea-herbal.webp", tag: "Веган", category: "tea" },
        { name: "Какао", price: 85, volume: "300 мл", description: "Справжнє какао на молоці, як у дитинстві", image: "img/menu/cocoa.webp", tag: "", category: "tea" },
        { name: "Матча лате", price: 110, volume: "300 мл", description: "Японська матча з ніжним молоком", image: "img/menu/matcha-latte.webp", tag: "", category: "tea" },
        { name: "Айс-матча", price: 120, volume: "350 мл", description: "Освіжаюча матча на льоду з молоком", image: "img/menu/iced-matcha.webp", tag: "Новинка", category: "tea" },
        { name: "Лимонад лимон-м’ята", price: 95, volume: "400 мл", description: "Домашній лимонад зі свіжою м’ятою та лаймом", image: "img/menu/lemonade-mint.webp", tag: "Веган", category: "tea" },
        { name: "Імбирний лимонад", price: 95, volume: "400 мл", description: "Лимон, імбир і мед, бадьоро та освіжаюче", image: "img/menu/lemonade-ginger.webp", tag: "", category: "tea" },
        { name: "Гарячий шоколад", price: 105, volume: "250 мл", description: "Густий бельгійський шоколад на вершковому молоці", image: "img/menu/hot-chocolate.webp", tag: "", category: "tea" }
      ]
    },
    {
      id: "desserts",
      title: "Десерти та випічка",
      short: "Десерти й випічка",
      note: "Печемо щоранку, тож найсвіжіше до обіду.",
      items: [
        { name: "Круасан класичний", price: 75, volume: "80 г", description: "Хрусткий масляний круасан власної випічки", image: "img/menu/croissant.webp", tag: "", category: "desserts" },
        { name: "Круасан мигдальний", price: 95, volume: "100 г", description: "З мигдальним франжипаном і пелюстками мигдалю", image: "img/menu/croissant-almond.webp", tag: "", popular: true, category: "desserts" },
        { name: "Чизкейк «Нью-Йорк»", price: 135, volume: "140 г", description: "Класичний вершковий чизкейк з ягідним соусом", image: "img/menu/cheesecake-ny.webp", tag: "Хіт", category: "desserts" },
        { name: "Баскський чизкейк", price: 145, volume: "140 г", description: "Карамелізована скоринка і ніжна кремова серединка", image: "img/menu/cheesecake-basque.webp", tag: "", popular: true, category: "desserts" },
        { name: "Булочка з корицею", price: 85, volume: "120 г", description: "М’яке дріжджове тісто, кориця та тростинний цукор", image: "img/menu/cinnamon-roll.webp", tag: "", category: "desserts" },
        { name: "Медівник", price: 120, volume: "150 г", description: "Медові коржі з ніжним сметанним кремом", image: "img/menu/medivnyk.webp", tag: "Хіт", category: "desserts" },
        { name: "Морквяний торт", price: 130, volume: "150 г", description: "З волоським горіхом, спеціями та сирним кремом", image: "img/menu/carrot-cake.webp", tag: "", category: "desserts" },
        { name: "Брауні", price: 95, volume: "90 г", description: "Шоколадний, вологий усередині, з хрусткою скоринкою", image: "img/menu/brownie.webp", tag: "", category: "desserts" }
      ]
    },
    {
      id: "breakfast",
      title: "Сніданки та закуски",
      short: "Сніданки",
      note: "Подаємо з відкриття й до закриття.",
      items: [
        { name: "Сирники", price: 165, volume: "220 г", description: "Зі сметаною, ягодами та ягідним соусом", image: "img/menu/syrnyky.webp", tag: "Хіт", popular: true, category: "breakfast" },
        { name: "Гранола з йогуртом", price: 140, volume: "250 г", description: "Домашня гранола, грецький йогурт і свіжі ягоди", image: "img/menu/granola.webp", tag: "", category: "breakfast" },
        { name: "Тост з авокадо", price: 185, volume: "220 г", description: "Хліб на заквасці, авокадо, томати й зелена цибуля", image: "img/menu/avocado-toast.webp", tag: "Веган", category: "breakfast" },
        { name: "Шакшука", price: 175, volume: "300 г", description: "Яйця в томатному соусі з перцем і зеленню", image: "img/menu/shakshuka.webp", tag: "", category: "breakfast" },
        { name: "Круасан з шинкою та сиром", price: 145, volume: "200 г", description: "Теплий круасан із шинкою, сиром і салатом", image: "img/menu/croissant-ham-cheese.webp", tag: "", category: "breakfast" },
        { name: "Круасан «Капрезе»", price: 140, volume: "200 г", description: "Моцарела, томати, песто та свіжий шпинат", image: "img/menu/croissant-caprese.webp", tag: "Новинка", category: "breakfast" }
      ]
    }
  ],
  addons: [{"name": "Рослинне молоко (вівсяне, кокосове, мигдальне)", "price": 20}, {"name": "Сироп", "price": 15}, {"name": "Додатковий шот еспресо", "price": 25}]
};
