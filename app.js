/*
    Код написан Михаилом Батуриным в 2024 году.
*/

// Сцены и локации

let homeScene = document.querySelector('.scenes > .home');
let locationSelectScene = document.querySelector('.scenes > .location-select');
let infoScene = document.querySelector('.scenes > .info');

let flatLocation = document.querySelector('.locations > .flat');
let natureLocation = document.querySelector('.locations > .nature');
let transportLocation = document.querySelector('.locations > .transport');
let historyLocation = document.querySelector('.locations > .history');

let nowScene = homeScene;

// Работа кнопок

function homeScenePlayButton() {
    playSound(1);
    homeScene.style.display = 'none';
    locationSelectScene.style.display = 'block';
    nowScene = locationSelectScene;
}

function homeSceneInfoButton() {
    playSound(1);
    homeScene.style.display = 'none';
    infoScene.style.display = 'block';
    nowScene = infoScene;
}

function locationSelectSceneGoToFlatLocationButton() {
    nowScene.style.display = 'none';
    flatLocation.style.display = 'block';
    nowScene = flatLocation;
    gameStart(1);
}

function locationSelectSceneGoToNatureLocationButton() {
    nowScene.style.display = 'none';
    natureLocation.style.display = 'block';
    nowScene = natureLocation;
    gameStart(2);
}

function locationSelectSceneGoToTransportLocationButton() {
    nowScene.style.display = 'none';
    transportLocation.style.display = 'block';
    nowScene = transportLocation;
    gameStart(3);
}

function locationSelectSceneGoToHistoryLocationButton() {
    nowScene.style.display = 'none';
    historyLocation.style.display = 'block';
    nowScene = historyLocation;
    gameStart(4);
}

function goBackButton() {
    playSound(1);
    nowScene.style.display = 'none';
    homeScene.style.display = 'block';
    nowScene = homeScene;
}

function goToLocationSelectButton() {
    playSound(1);
    nowScene.style.display = 'none';
    locationSelectScene.style.display = 'block';
    nowScene = locationSelectScene;
}

function exitButton() {
    window.close();
}

function playSound(id) {
    if (id == 1) {
        let audio = new Audio('sounds/tap.mp3');
        audio.play();
    } else if (id == 2) {
        let audio = new Audio('sounds/win.mp3');
        audio.play();
    } else if (id == 3) {
        let audio = new Audio('sounds/lose.mp3');
        audio.play();
    } else {
        alert('Ошибка: неизвестный звук.');
    }
}

// Игровой процесс

let extinguishers = 0;

if (localStorage.getItem('extinguishers') !== undefined) {
    extinguishers = Number(localStorage.getItem('extinguishers'));
}

setInterval(() => {
    localStorage.setItem('extinguishers', extinguishers);
    let extinguishersCounter = document.querySelector('.scenes > .home > .extinguishers > h3 > b');
    extinguishersCounter.innerHTML = localStorage.getItem('extinguishers');
});

let flatLocationQuestions = [
    [
        'Каким образом должно осуществляться оповещение людей о пожаре?',
        'C помощью трансляции специально разработанных текстов о необходимости эвакуации и путях эвакуации',
        'C помощью включения эвакуационного (аварийного) освещения',
        'C помощью подачи звуковых или световых сигналов во все помещения здания с постоянным или временным пребыванием людей',
        'Любым из перечисленных способов',
        4
    ],
    [
        'Какие сведения необходимо сообщать во время звонка в пожарную охрану в случае возникновения пожара?',
        'Только адрес, по которому случилось возгорание, количество пострадавших',
        'Только адрес объекта, место возникновения пожара, а также сообщить свою фамилию',
        'Только адрес объекта, место возникновения пожара, количество пострадавших, данные позвонившего',
        'Только адрес объекта, место возникновения пожара, количество пострадавших',
        2
    ],
    [
        'Можно ли эксплуатировать неисправные электрические приборы?',
        'Можно, если это необходимо',
        'Можно, если это не угрожает жизни и здоровью людей',
        'Можно, если на это есть разрешение инспектора Госпожнадзора',
        'Эксплуатация неисправных электрических приборов запрещена',
        4
    ],
    [
        'Если в твоей квартире или доме случился пожар, кого ты должен оповестить после вызова пожарных?',
        'Полицию',
        'Скорую Помощь',
        'Соседей',
        'Одноклассников',
        3
    ],
    [
        'Вернувшись с прогулки, вы открыли дверь своей квартиры и обнаружили сильное задымление. Ваши дальнейшие действия?',
        'Войдете в квартиру и будете искать источник задымления',
        'Откроете окна, чтобы проветрить квартиру',
        'Плотно закроете дверь и вызовете пожарных',
        'Возьмёте смартфон и будете снимать на видео происходящее',
        3
    ],
    [
        'При возникновении пожара вам нужно покинуть квартиру, находящуюся на девятом этаже. Что Вы будете делать?',
        'Воспользуюсь лифтом',
        'Спущусь по внешним пожарным лестницам',
        'Прикрывая дыхательные органы рукой или платком, выйду через подъезд',
        'Поднимусь на крышу',
        2
    ],
    [
        'Как потушить загоревшуюся на человеке одежду?',
        'Направить на него струю огнетушителя',
        'Повалить человека на землю и накрыть платной тканью',
        'Сорвать с него одежду',
        'Обдувать человека воздухом',
        2
    ],
    [
        'Вечером, придя домой, вы почувствовали запах газа. Что нужно сделать?',
        'Перекрыть основной вентиль подачи газа, открыть окна и двери, пойти к соседям, позвонить родителям или в аварийную службу',
        'Включить свет, позвонить родителям или в аварийную службу',
        'Открыть окна и зажечь спичку, чтобы проверить, откуда идёт газ',
        'Ничего не предпринимать',
        1
    ],
    [
        'Какие предметы при возгорании нельзя заливать водой?',
        'Стол',
        'Кресло',
        'Диван',
        'Включённый в сеть телевизор',
        4
    ],
    [
        'Выберите предметы, неправильное обращение с которыми может привести к пожару.',
        'Нож',
        'Электрический фонарик',
        'Утюг',
        'Механические часы',
        3
    ]
];

let natureLocationQuestions = [
    [
        'Что делать, если Вы увидели, что на опушке леса горит сухая трава?',
        'Пройду мимо',
        'Буду сбивать пламя ветками деревьев',
        'Сообщу об этом взрослым или позвоню пожарным',
        'Буду снимать видео',
        3
    ],
    [
        'Как Вы поступите с костром перед тем, как покинуть место отдыха?',
        'Никак. Костер потухнет самостоятельно',
        'Залью водой или засыплю землей',
        'Подброшу веток в огонь и уйду',
        'Задую костёр',
        2
    ],
    [
        'Вы попали в зону лесного пожара. Ваши действия:',
        'Буду убегать от огня, двигаясь перпендикулярно направлению ветра',
        'Буду фотографировать и снимать видео, чтобы отправить друзьям',
        'Спрячусь под кустом или деревом',
        'Залезу повыше на дерево',
        1
    ],
    [
        'Какой из предлагаемых вариантов Вы предпочтёте, выбирая место для костра?',
        'Живописную поляну',
        'Старое кострище',
        'Симпатичный уголок леса с мягкой подстилкой из сухой хвои и листьев',
        'В тени под деревьями',
        2
    ],
    [
        'Какой вид мусора может спровоцировать пожар в лесу?',
        'Газета',
        'Упаковка от чипсов',
        'Стеклянная бутылка',
        'Консервная банка',
        3
    ],
    [
        'Что должен делать человек, если при пожаре в лесу на нем загорелась куртка?',
        'Плакать',
        'Кричать',
        'Не двигаться',
        'Кататься по земле',
        4
    ],
    [
        'Когда наиболее часто возникают природные пожары?',
        'Зимой',
        'Весной',
        'Летом',
        'Осенью',
        3
    ],
    [
        'Какой дым наиболее опасен для человека?',
        'От горящих деревьев',
        'От горящей синтетической ткани',
        'От горящей травы',
        'От горящей бумаги',
        2
    ],
    [
        'Какого вида лесного пожара нет?',
        'Стволовой пожар',
        'Низовой пожар',
        'Верховой пожар',
        'Подземный пожар',
        1
    ],
    [
        'Какие деревья быстрее воспламеняются?',
        'Дуб',
        'Сосна',
        'Берёза',
        'Липа',
        2
    ]
];

let transportLocationQuestions = [
    [
        'Кто отвечает за организацию эвакуации при возгорании в общественном транспорте?',
        'Водитель',
        'Кондуктор',
        'Пассажиры',
        'Контролёр',
        1
    ],
    [
        'Что нужно сделать в первую очередь при возгорании в общественном транспорте?',
        'Позвонить одноклассникам',
        'Сообщить водителю',
        'Кричать и звать на помощь',
        'Разбить окно',
        2
    ],
    [
        'Где в автобусах, трамваях, троллейбусах должны быть огнетушители? ',
        'Их нет в общественном транспорте',
        'У водителя',
        'Один должен находиться вблизи сиденья водителя, другой в конце салона',
        'Над дверью',
        3
    ],
    [
        'Запасным выходом в случае пожара в наземном общественном транспорте являются:',
        'Люки',
        'Двери',
        'Багажник',
        'Окна, отмеченные специальными табличками',
        4
    ],
    [
        'Какие пожароопасные предметы запрещено перевозить в общественном транспорте?',
        'Взрывоопасные вещества',
        'Бытовую технику',
        'Бумагу',
        'Пищевые продукты',
        1
    ],
    [
        'Каким средством невозможно потушить горюче-смазочные материалы?',
        'Пеной',
        'Водой',
        'Землёй',
        'Песком',
        2
    ],
    [
        'При движении поезда в вашем вагоне появился запах гари и дыма. Как вы будете действовать?',
        'Пойдёте по соседним купе и будете сообщать пассажирам',
        'Дернете стоп-кран',
        'Сообщите проводнику, соберете вещи и будете ждать дальнейших указаний в купе',
        'Закроетесь в купе',
        3
    ],
    [
        'Что нужно защищать влажной тканью при возгорании в автобусе?',
        'Органы слуха',
        'Органы зрения',
        'Органы пищеварения',
        'Органы дыхания',
        4
    ],
    [
        'Что нужно давать пострадавшим в транспорте при пожаре?',
        'Обильное питание',
        'Обильное питьё',
        'Много сладкого',
        'Много солёного',
        2
    ],
    [
        'Как при пожаре в троллейбусе нужно выходить из него?',
        'Бегом',
        'Ползком',
        'Прыжком',
        'Закрыв глаза',
        3
    ]
];

let historyLocationQuestions = [
    [
        'Как назывался первый закон на Руси, связанный с пожарной безопасностью?',
        'Русская Правда',
        'Судебник Ивана IV',
        'Соборное Уложение',
        'Стоглав',
        1
    ],
    [
        'Кто при Петре I был руководителем всей пожарной охраны?',
        'Меньшиков',
        'Троекуров',
        'Орлов',
        'Дубровский',
        2
    ],
    [
        'Какой человек являлся основателем журнала «Пожарное дело», основателем пожарного добровольчества в России, а также получил прозвище «Огненный князь»?',
        'Василий Шуйский',
        'Афанасий Вяземский',
        'Александр Львов',
        'Василий Трубецкой',
        3
    ],
    [
        'В каком году были созданы первые пожарные команды в России?',
        'В 1862 году',
        'В 1748 году',
        'В 1629 году',
        'В 1550 году',
        4
    ],
    [
        'Когда отмечается день пожарной охраны?',
        '12 апреля',
        '27 августа',
        '30 апреля',
        '5 марта',
        3
    ],
    [
        'Какое известное выражение в старину обозначало «устроить пожар»?',
        '«дать петуха»',
        '«пустить красного петуха»',
        '«встать с петухами»',
        '«разбудить петуха»',
        2
    ],
    [
        'На чём в старину передвигались пожарные команды до появления пожарных машин?',
        'На телегах, запряжённых лошадьми',
        'Пешком',
        'На велосепидах',
        'На самокатах',
        1
    ],
    [
        'Как называли несколько конных упряжек, которые вместе везли бочки с водой и пожарных на пожар?',
        'Пожарный ход',
        'Пожарный обоз',
        'Пожарный состав',
        'Пожарный строй',
        2
    ],
    [
        'Как отличали пожарный обоз одной пожарной части от другой?',
        'По флагу',
        'По цвету формы',
        'По окрасу лошадей',
        'По окрасу телег',
        3
    ],
    [
        'Почему пожарным в старину запрещали брить бороды и усы?',
        'Для красоты',
        'Для узнаваемости',
        'Для важности',
        'Для защиты от дыма',
        4
    ]
];

let nowLocationFlatQuestion = -1;
let nowLocationNatureQuestion = -1;
let nowLocationTransportQuestion = -1;
let nowLocationHistoryQuestion = -1;

function gameStart(locationNumber) {
    if (locationNumber == 1) {
        nowLocationFlatQuestion += 1;
        let plus = document.querySelector('.locations > .flat > .title > h2 > .plus');
        let questionField = document.querySelector('.locations > .flat > .content > .question > h3');
        let answersFields = [
            document.querySelector('.locations > .flat > .content > .answers > .answer-1'),
            document.querySelector('.locations > .flat > .content > .answers > .answer-2'),
            document.querySelector('.locations > .flat > .content > .answers > .answer-3'),
            document.querySelector('.locations > .flat > .content > .answers > .answer-4')
        ];
        questionField.innerHTML = flatLocationQuestions[nowLocationFlatQuestion][0];
        answersFields.forEach((element, index) => {
            element.innerHTML = flatLocationQuestions[nowLocationFlatQuestion][index + 1];
        });
        answersFields.forEach((_element, index) => {
            answersFields[index].onclick = () => {
                if ((index + 1) == flatLocationQuestions[nowLocationFlatQuestion][5]) {
                    playSound(2);
                    plus.style.opacity = 1;
                    answersFields[index].style.background = 'green';
                    setTimeout(() => {
                        plus.style.opacity = 0;
                        answersFields[index].style.background = 'var(--color-3)';
                    }, 1000);
                    extinguishers = Number(extinguishers + 2);
                    setTimeout(() => {
                        if (nowLocationFlatQuestion == (flatLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 2.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 2000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToNatureLocationButton();
                            }, 2000);
                        } else {
                            gameStart(1);
                        }
                    }, 1000);
                } else {
                    playSound(3);
                    answersFields[index].style.background = 'red';
                    answersFields[flatLocationQuestions[nowLocationFlatQuestion][5] - 1].style.background = 'green';
                    setTimeout(() => {
                        answersFields[index].style.background = 'var(--color-3)';
                        answersFields[flatLocationQuestions[nowLocationFlatQuestion][5] - 1].style.background = 'var(--color-3)';
                    }, 1000);
                    setTimeout(() => {
                        if (nowLocationFlatQuestion == (flatLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 2.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 2000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToNatureLocationButton();
                            }, 2000);
                        } else {
                            gameStart(1);
                        }
                    }, 1000);
                }
            }
        });
    } else if (locationNumber == 2) {
        nowLocationNatureQuestion += 1;
        let plus = document.querySelector('.locations > .nature > .title > h2 > .plus');
        let questionField = document.querySelector('.locations > .nature > .content > .question > h3');
        let answersFields = [
            document.querySelector('.locations > .nature > .content > .answers > .answer-1'),
            document.querySelector('.locations > .nature > .content > .answers > .answer-2'),
            document.querySelector('.locations > .nature > .content > .answers > .answer-3'),
            document.querySelector('.locations > .nature > .content > .answers > .answer-4')
        ];
        questionField.innerHTML = natureLocationQuestions[nowLocationNatureQuestion][0];
        answersFields.forEach((element, index) => {
            element.innerHTML = natureLocationQuestions[nowLocationNatureQuestion][index + 1];
        });
        answersFields.forEach((_element, index) => {
            answersFields[index].onclick = () => {
                if ((index + 1) == natureLocationQuestions[nowLocationNatureQuestion][5]) {
                    playSound(2);
                    plus.style.opacity = 1;
                    answersFields[index].style.background = 'green';
                    setTimeout(() => {
                        plus.style.opacity = 0;
                        answersFields[index].style.background = 'var(--color-3)';
                    }, 1000);
                    extinguishers = Number(extinguishers + 4);
                    setTimeout(() => {
                        if (nowLocationFlatQuestion == (flatLocationQuestions.length - 1)) {  
                            questionField.innerHTML = 'Отлично! Ваша награда: 40.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 40000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToTransportLocationButton();
                            }, 2000);
                        } else {
                            gameStart(2);
                        }
                    }, 1000);
                } else {
                    playSound(3);
                    answersFields[index].style.background = 'red';
                    answersFields[natureLocationQuestions[nowLocationNatureQuestion][5] - 1].style.background = 'green';
                    setTimeout(() => {
                        answersFields[index].style.background = 'var(--color-3)';
                        answersFields[natureLocationQuestions[nowLocationNatureQuestion][5] - 1].style.background = 'var(--color-3)';
                    }, 1000);
                    setTimeout(() => {
                        if (nowLocationNatureQuestion == (natureLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 40.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 40000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToTransportLocationButton();
                            }, 2000);
                        } else {
                            gameStart(2);
                        }
                    }, 1000);
                }
            }
        });
    } else if (locationNumber == 3) {
        nowLocationTransportQuestion += 1;
        let plus = document.querySelector('.locations > .transport > .title > h2 > .plus');
        let questionField = document.querySelector('.locations > .transport > .content > .question > h3');
        let answersFields = [
            document.querySelector('.locations > .transport > .content > .answers > .answer-1'),
            document.querySelector('.locations > .transport > .content > .answers > .answer-2'),
            document.querySelector('.locations > .transport > .content > .answers > .answer-3'),
            document.querySelector('.locations > .transport > .content > .answers > .answer-4')
        ];
        questionField.innerHTML = transportLocationQuestions[nowLocationTransportQuestion][0];
        answersFields.forEach((element, index) => {
            element.innerHTML = transportLocationQuestions[nowLocationTransportQuestion][index + 1];
        });
        answersFields.forEach((_element, index) => {
            answersFields[index].onclick = () => {
                if ((index + 1) == transportLocationQuestions[nowLocationTransportQuestion][5]) {
                    playSound(2);
                    plus.style.opacity = 1;
                    answersFields[index].style.background = 'green';
                    setTimeout(() => {
                        plus.style.opacity = 0;
                        answersFields[index].style.background = 'var(--color-3)';
                    }, 1000);
                    extinguishers = Number(extinguishers + 6);
                    setTimeout(() => {
                        if (nowLocationFlatQuestion == (flatLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 600.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 600000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToHistoryLocationButton();
                            }, 2000);
                        } else {
                            gameStart(3);
                        }
                    }, 1000);
                } else {
                    playSound(3);
                    answersFields[index].style.background = 'red';
                    answersFields[transportLocationQuestions[nowLocationTransportQuestion][5] - 1].style.background = 'green';
                    setTimeout(() => {
                        answersFields[index].style.background = 'var(--color-3)';
                        answersFields[transportLocationQuestions[nowLocationTransportQuestion][5] - 1].style.background = 'var(--color-3)';
                    }, 1000);
                    setTimeout(() => {
                        if (nowLocationTransportQuestion == (transportLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 600.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 600000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToHistoryLocationButton();
                            }, 2000);
                        } else {
                            gameStart(3);
                        }
                    }, 1000);
                }
            }
        });
    } else if (locationNumber == 4) {
        nowLocationHistoryQuestion += 1;
        let plus = document.querySelector('.locations > .history > .title > h2 > .plus');
        let questionField = document.querySelector('.locations > .history > .content > .question > h3');
        let answersFields = [
            document.querySelector('.locations > .history > .content > .answers > .answer-1'),
            document.querySelector('.locations > .history > .content > .answers > .answer-2'),
            document.querySelector('.locations > .history > .content > .answers > .answer-3'),
            document.querySelector('.locations > .history > .content > .answers > .answer-4')
        ];
        questionField.innerHTML = historyLocationQuestions[nowLocationHistoryQuestion][0];
        answersFields.forEach((element, index) => {
            element.innerHTML = historyLocationQuestions[nowLocationHistoryQuestion][index + 1];
        });
        answersFields.forEach((_element, index) => {
            answersFields[index].onclick = () => {
                if ((index + 1) == historyLocationQuestions[nowLocationHistoryQuestion][5]) {
                    playSound(2);
                    plus.style.opacity = 1;
                    answersFields[index].style.background = 'green';
                    setTimeout(() => {
                        plus.style.opacity = 0;
                        answersFields[index].style.background = 'var(--color-3)';
                    }, 1000);
                    extinguishers = Number(extinguishers + 8);
                    setTimeout(() => {
                        if (nowLocationHistoryQuestion == (historyLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 8.000.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 8000000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToFlatLocationButton();
                            }, 2000);
                        } else {
                            gameStart(4);
                        }
                    }, 1000);
                } else {
                    playSound(3);
                    answersFields[index].style.background = 'red';
                    answersFields[historyLocationQuestions[nowLocationHistoryQuestion][5] - 1].style.background = 'green';
                    setTimeout(() => {
                        answersFields[index].style.background = 'var(--color-3)';
                        answersFields[historyLocationQuestions[nowLocationHistoryQuestion][5] - 1].style.background = 'var(--color-3)';
                    }, 1000);
                    setTimeout(() => {
                        if (nowLocationHistoryQuestion == (historyLocationQuestions.length - 1)) {
                            questionField.innerHTML = 'Отлично! Ваша награда: 8.000.000 <i class="fi fi-sr-fire-extinguisher" style="color:var(--color-3)"></i> Вы переходите на следующую локацию...';
                            extinguishers = Number(extinguishers + 8000000);
                            answersFields.forEach((_element, index) => {
                                answersFields[index].innerHTML = '';
                            });
                            setTimeout(() => {
                                locationSelectSceneGoToFlatLocationButton();
                            }, 2000);
                        } else {
                            gameStart(4);
                        }
                    }, 1000);
                }
            }
        });
    } else {
        alert('Ошибка: неизвестная локация.');
    }
}