export default function HomePage() {
  return (
    <>
      {/* Шапка */}
      <header className="bg-white py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p className="text-2xl font-bold text-[#1a2a52]">BOXPACK</p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services">Услуги</a>
            <a href="#steps">Как это работает</a>
            <a href="#">Видеофиксация</a>
            <a href="#">Калькулятор</a>
            <a href="#">Кейсы</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </header>
      {/* Первый экран */}
      <section className="bg-[#1a2a52] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm">Автоматизированный фулфилмент</p>
            <h1 className="mt-4 text-4xl font-bold lg:text-5xl">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="mt-6 text-sm">
              Автоматизированная упаковка, видеоконтроль каждого заказа и
              отправка в день поступления. Мы берем на себя хранение, сборку,
              маркировку и логистику.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <a href="#" className="text-sm font-bold">
                Рассчитать стоимость →
              </a>
              <button className="rounded-[10px] border border-white px-4 py-2 text-sm">
                Получить консультацию
              </button>
            </div>

            {/* Три карточки с цифрами */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[10px] bg-white/10 p-4">
                <p className="font-bold">5000+</p>
                <p className="mt-1 text-xs">заказов в день</p>
              </div>

              <div className="rounded-[10px] bg-white/10 p-4">
                <p className="font-bold">99.8%</p>
                <p className="mt-1 text-xs">Точность сборки</p>
              </div>

              <div className="rounded-[10px] bg-white/10 p-4">
                <p className="font-bold">FBO/FBS</p>
                <p className="mt-1 text-xs">все маркетплейсы</p>
              </div>
            </div>
          </div>

          {/* Место под видео */}
          <div className="flex h-[240px] items-center justify-center rounded-[10px] bg-[#d3d6e0] text-xs text-black lg:h-[300px]">
            Видео автоматической упаковочной линии
          </div>
        </div>
      </section>
      {/* Как начать работать с нами */}
      <section id="steps" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold">
            Как начать работать с нами
          </h2>
          <p className="mt-3 text-center text-sm">
            Подключение занимает всего несколько дней. Все процессы максимально
            автоматизированы.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 1</p>
              <h3 className="mt-2 text-xs">Оставляете заявку</h3>
              <p className="mt-2 text-xs text-gray-400">Через сайт или Telegram</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 2</p>
              <h3 className="mt-2 text-xs">Получаете расчет</h3>
              <p className="mt-2 text-xs text-gray-400">Под ваш объем и формат работы</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 3</p>
              <h3 className="mt-2 text-xs">Подписываем договор</h3>
              <p className="mt-2 text-xs text-gray-400">Через ЭДО</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 4</p>
              <h3 className="mt-2 text-xs">Принимаем товар</h3>
              <p className="mt-2 text-xs text-gray-400">От поставщика или транспортной компании</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 5</p>
              <h3 className="mt-2 text-xs">Автоматизированная упаковка</h3>
              <p className="mt-2 text-xs text-gray-400">С видеоконтролем каждого шага</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 6</p>
              <h3 className="mt-2 text-xs">Отправляем</h3>
              <p className="mt-2 text-xs text-gray-400">На маркетплейсы по всей России</p>
            </div>

            <div className="rounded-[10px] bg-[#f0f0f0] p-5">
              <p className="text-xs font-bold">ШАГ 7</p>
              <h3 className="mt-2 text-xs">Получаете результат</h3>
              <p className="mt-2 text-xs text-gray-400">Отчеты и прозрачная аналитика</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}