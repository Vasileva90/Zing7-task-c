const Content = () => {
    return (
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-10">
              <h1 className="font-space-grotesk font-semibold text-5xl leading-[115%] tracking-[-2px] text-left text-swamp-blue">
                  Решения
              </h1>
              <div className="flex flex-col gap-y-10">
                  <p className="font-inter font-normal text-lg leading-[170%] text-left text-swamp-blue">
                      Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове
                       бизнес – от малки местни предприятия до мултинационални компании.
                  </p>
                  <div>
                      <p className="font-inter font-normal text-lg leading-[170%] text-left text-swamp-blue">
                          Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
                      </p>
                      <ul className="list-disc font-inter font-normal text-lg leading-[170%] text-swamp-blue pl-6">
                          <li>Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
                          <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
                          <li>Взимане на стоки и доставки за от и в България;</li>
                          <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
                          <li>Регулярни групажни линии;</li>
                          <li>Транспортни услуги до Турция и Близкия изток;</li>
                          <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="flex flex-col gap-y-10">
              <h1 className="font-space-grotesk font-semibold text-5xl leading-[115%] tracking-[-2px] text-left text-swamp-blue">
                  Предимства
              </h1>
              <div className="flex flex-col gap-y-8">
                  <p className="font-inter font-normal text-lg leading-[170%] text-left text-swamp-blue">
                      Фокусът ни върху клиентите е същността на нашата работа.
                      Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.
                  </p>
                  <p className="font-inter font-normal text-lg leading-[170%] text-left text-swamp-blue">
                      Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.
                  </p>
              </div>
          </div>

        </div>
    )
}

export default Content