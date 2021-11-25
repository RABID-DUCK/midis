﻿let test = [
    {
        question: "Вопрос 1 Мне хотелось бы в своей профессиональной деятельности",
        answers: ["А) общаться с самыми разными людьми;", "Б) что-нибудь делать своими руками – мебель, одежду, машины и т.д.;", "В) снимать фильмы, рисовать, писать книги, выступать на сцене и т.д."]
    },
    {
        question: "Вопрос 2 В книге или кинофильме меня больше всего привлекает:",
        answers: ["А) художественная форма, мастерство писателя или режиссера;", "Б) сюжет, действие героев;", "В) информация, которая может пригодиться в жизни."]
    },
    {
        question: "Вопрос 3 Меня обрадует Нобелевская премия:",
        answers: ["А) в области науки;", "Б) за общественную деятельность;", "В) в области искусства."]
    },
    {
        question: "Вопрос 4 Я скорее соглашусь стать:",
        answers: ["А) управляющим банка;", "Б) главным инженером на производстве;", "В) начальником экспедиции."]
    },
    {
        question: "Вопрос 5 Будущее людей определяет:",
        answers: ["А) достижение науки;", "Б) развитие производства;", "В) взаимопонимание среди людей."]
    },
    {
        question: "Вопрос 6 На месте директора школы я прежде всего займусь:",
        answers: ["А) благоустройством школы (столовая, спортзал, компьютеры);", "Б) созданием дружного, сплоченного коллектива;", "В) разработкой новых технологий обучения."]
    },
    {
        question: "Вопрос 7 На технической выставке меня больше всего привлечет:",
        answers: ["А) внешний вид экспонатов (цвет, форма);", "Б) внутреннее устройство экспонатов (механизм);", "В) практическое применение экспонатов."]
    },
    {
        question: "Вопрос 8 В людях я ценю прежде всего:",
        answers: ["А) мужество, смелость, выносливость;", "Б) дружелюбие, чуткость, отзывчивость;", "В) ответственность, аккуратность."]
    },
    {
        question: "Вопрос 9 В свободное от работы время я буду:",
        answers: ["А) писать стихи или музыку или рисовать;", "Б) ставить различные опыты;", "В) тренироваться."]
    },
    {
        question: "Вопрос 10 В заграничных поездках меня больше всего привлечет:",
        answers: ["А) экстремальный туризм (альпинизм, виндсерфинг, горные лыжи);", "Б) деловое общение;", "В) возможность знакомства с историей и культурой другой страны."]
    },
    {
        question: "Вопрос 11 Мне интереснее беседовать:",
        answers: ["А) о машине нового типа;", "о новой научной теории;", "о человеческих взаимоотношениях."]
    },
    {
        question: "Вопрос 12  Если бы в моей школе было всего три кружка, я бы выбрал:",
        answers: ["А) технический;", "Б) музыкальный;", "В) спортивный."]
    },
    {
        question: "Вопрос 13  В школе больше внимания следует уделять:",
        answers: ["А) улучшению взаимопонимания между учителями и учениками;", "Б) поддержанию здоровья учащихся, занятиям спортом;", "В) укреплению дисциплины."]
    },
    {
        question: "Вопрос 14 Я с большим интересом смотрю:",
        answers: ["А) научно-популярные фильмы;", "Б) программы о культуре и спорте;", "В) спортивные программы."]
    },
    {
        question: "Вопрос 15 Мне было бы интереснее работать:",
        answers: ["А) с машинами, механизмами;", "Б) с объектами природы;", "В) с детьми или сверстниками."]
    },
    {
        question: "Вопрос 16 Школа в первую очередь должна:",
        answers: ["А) давать знания и умения;", "Б) учить общению с другими людьми;", "В) обучать навыкам работы."]
    },
    {
        question: "Вопрос 17 Каждый человек должен:",
        answers: ["А) вести здоровый образ жизни;", "Б) иметь возможность заниматься творчеством;", "В) иметь удобные бытовые условия."]
    },
    {
        question: "Вопрос 18 Для благополучия общества в первую очередь необходима:",
        answers: ["А) защита интересов и прав граждан;", "Б) забота о материальном благополучии людей;", "В) наука и технический прогресс."]
    },
    {
        question: "Вопрос 19 Мне больше всего нравятся уроки:",
        answers: ["А) физкультуры;", "Б) математики;", "В) труда."]
    },
    {
        question: "Вопрос 20 Мне интереснее было бы:",
        answers: ["А) планировать производство продукции;", "Б) изготавливать изделия;", "В) заниматься сбытом продукции."]
    },
    {
        question: "Вопрос 21 Я предпочитаю читать статьи:",
        answers: ["А) о выдающихся ученых и их открытиях;", "Б) о творчестве ученых и музыкантов;", "В) об интересных изобретениях."]
    },
    {
        question: "Вопрос 22 Свободное время я охотнее провожу:",
        answers: ["А) делая что-то по хозяйству;", "Б) с книгой;", "В) на выставках, концертах и пр."]
    },
    {
        question: "Вопрос 23 Больший интерес у меня вызовет сообщение:",
        answers: ["А) о художественной выставке;", "Б) о ситуации на фондовой бирже;", "В) о научном открытии."]
    },
    {
        question: "Вопрос 24 Я предпочитаю работать:",
        answers: ["А) в помещении, где много людей;", "Б) в необычных условиях;", "В) в обычном кабинете."]
    }
];

let answers = [[1, 0, 0, 3, 0, 2],
[0, 3, 0, 1, 2, 0],
[2, 1, 0, 3, 0, 0],
[0, 0, 2, 0, 3, 1],
[3, 1, 2, 0, 0, 0],
[2, 3, 0, 0, 0, 1],
[0, 2, 3, 1, 0, 0],
[2, 0, 0, 0, 1, 3],
[0, 2, 0, 1, 3, 0],
[0, 0, 0, 3, 1, 2],
[3, 2, 1, 0, 0, 0],
[0, 0, 1, 2, 3, 0],
[1, 0, 0, 0, 2, 3],
[0, 2, 0, 2, 3, 0],
[3, 0, 1, 0, 2, 0],
[2, 0, 3, 0, 0, 1],
[0, 0, 0, 2, 1, 3],
[1, 3, 2, 0, 0, 0],
[0, 0, 3, 0, 1, 2],
[3, 0, 2, 0, 0, 1],
[0, 1, 3, 2, 0, 0],
[0, 2, 1, 3, 0, 0],
[0, 3, 0, 1, 0, 2],
[1, 0, 0, 0, 2, 3],
];

let question = [0, 0, 0, 0, 0, 0];

var d = document;
let getQuest = document.querySelector(".questions");
let h2 = document.querySelector(".block1 h2");
let form1 = document.querySelector(".form1");
let a = d.querySelector(".block1 p");
let number = 0;

let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// ходьба по номерам заданий-----------------------------------------
for (let index = 0; index < 24; index++) {
    let elem = document.createElement("div");
    elem.classList.add("blocks")
    elem.textContent = index + 1
    getQuest.append(elem)
    selectNumbers(elem, index)
}
function selectNumbers(item, id) {
    item.addEventListener('click', (e) => {
        console.log(id)
        number = id
        getQuestion(number);
        if (number != 0) { back.classList.remove("btn-none"); if (!a.classList.contains("btn-none") && number < 23) { a.classList.add("btn-none"); console.log("условие сработало") } } else { back.classList.add("btn-none"); if (!a.classList.contains("btn-none") && number < 23) { a.classList.add("btn-none"); console.log("условие сработало") } };

        if (number == 23) {
            next.classList.add("btn-none");
            itog.classList.remove("btn-none");
        }
        else {
            if (!a.classList.contains("btn-none") && number < 23) { a.classList.add("btn-none"); console.log("условие сработало") }
            next.classList.remove("btn-none");
            itog.classList.add("btn-none");
        };
    })
}
//--------------------------------------------------------------
function getQuestion(n) {
    form1.innerHTML = "";
    h2.innerHTML = test[n].question;
    let l = test[n].answers;
    for (let i in l) {

        let elem = document.createElement("input");
        elem.setAttribute('type', 'radio');
        elem.setAttribute('id', 'question' + i);
        elem.setAttribute('value', Number(i) + 1);
        if (result[number] == Number(i) + 1) {
            elem.checked = true;
        }
        let elem1 = document.createElement("label");
        elem1.setAttribute('for', 'question' + i);
        elem1.innerHTML = l[i];

        let elem2 = document.createElement("br");
        form1.append(elem);
        form1.append(elem1);
        form1.append(elem2);
    }
    let radious = document.querySelectorAll("input[type='radio']");
    for (let radio of radious) {
        radio.addEventListener("change", (event) => {
            result[number] = radio.getAttribute("value");
            //   var radios = $('input[type="radio"]', $('#formid'));
        });
    };

};

getQuestion(number);

let next = document.querySelector(".block3");
let nextEnter = document.querySelector('.block1');
let itog = document.querySelector(".itog");
console.log(itog);
nextEnter.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13 && number < 23){
        number++;
		if (number >= 23) {
			next.classList.add("btn-none");
			itog.classList.remove("btn-none");
		}
		else {
			if (!a.classList.contains("btn-none") && number < 23) { a.classList.add("btn-none"); console.log("условие сработало") }
			back.classList.remove("btn-none");
			itog.classList.add("btn-none");
		}
		getQuestion(number);
    }
});
next.addEventListener("click", (event) => {
    
    /* if(result[number]!=0) {
         getQuest
     }*/
     if (result[number] != 0) {
        let l1 = getQuest.children;
        console.log(l1)
        l1[number].classList.add("ready")
    }
    number++;

    if (number >= 23) {
        next.classList.add("btn-none");
        itog.classList.remove("btn-none");
    }
    else {
        if (!a.classList.contains("btn-none") && number < 23) { a.classList.add("btn-none"); console.log("условие сработало") }
        back.classList.remove("btn-none");
        itog.classList.add("btn-none");
    }

    getQuestion(number);
});



let back = document.querySelector(".block5");

back.addEventListener("click", (event) => {
    number--;
    next.classList.remove("btn-none");
    if (number <= 0) {
        back.classList.add("btn-none");
    }
    if (number < 24) {
        if (!a.classList.contains("btn-none") && number < 23) { a.classList.add("btn-none"); console.log("условие сработало") }

        itog.classList.add("btn-none");
    }

    getQuestion(number);
});




itog.addEventListener("click", (event) => {
    let flag=false;
    let min=1;
	let vibor = 0;
    for (let index = 0; index < 24; index++) {
        if (result[index] == 0) {
            min=result[index]
        } 

    }

    if(min==0){flag=false; alert('Вы не полностью прошли тест');}else{flag=true}

    if(flag)
    {
        itog.classList.add("btn-none");
        back.classList.add("btn-none");
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < answers.length; j++) {

                if (result[i] == answers[i][j]) {
                    question[j]++;
                }
            }
        }

        let max = 0;
        for (let i = 0; i < question.length; i++) {
            if (question[i] >= max) {
                max = question[i];
                vibor = i;
                console.log(vibor)
            }
        }

        switch (vibor) {
            case 1:
                d.querySelector(".block1").innerHTML = '<div class="pnrm people"></div>\n<hr class="hr1">\n<h2>\nПоздравляем, вам больше подходит «Сфера работы с людьми» \n</h2>\n<p>\nОна включает такие профессии как: учитель, педагог, экскурсовод, воспитатель, социолог, психолог, менеджер по персоналу, следователь.\n</p>\n<p>Именно это мы развиваем в себе всю жизнь, начиная с младенчества, и именно здесь нас не сможет обойти робот. Умение продуктивно общаться и взаимодействовать в процессе совместной деятельности, учитывать позиции других участников деятельности и эффективно разрешать конфликты - очень важные навыки, которые пока что доступны только человеку.\n</p>';
                break;

            case 2:
                d.querySelector(".block1").innerHTML = '<div class="pnrm people"></div>\n<hr class="hr1">\n<h2>\nПоздравляем, вам больше подходит «сфера умственного труда» \n</h2>\n<p>\nОна включает такие профессии как: ученый-исследователь(математик, физик, химик, кибернетик, археолог, геолог), инженер,юрист, врач,эколог, архитектор,продюсер.\n</p>\n<p>Именно это мы развиваем в себе всю жизнь, начиная с младенчества, и именно здесь нас не сможет обойти робот. Умение продуктивно общаться и взаимодействовать в процессе совместной деятельности, учитывать позиции других участников деятельности и эффективно разрешать конфликты - очень важные навыки, которые пока что доступны только человеку.\n</p>';
                break;

            case 3:
                d.querySelector(".block1").innerHTML = '<div class="pnrm people"></div>\n<hr class="hr1">\n<h2>\nПоздравляем, вам больше подходит «сфера технических интересов» \n</h2>\n<p>\nОна включает такие профессии как: программист, электротехник, радиотехник,Web-мастер, статистик, водитель, технолог, диспетчер,секретарь-машинистка,телефонист.\n</p>\n<p>Именно это мы развиваем в себе всю жизнь, начиная с младенчества, и именно здесь нас не сможет обойти робот. Умение продуктивно общаться и взаимодействовать в процессе совместной деятельности, учитывать позиции других участников деятельности и эффективно разрешать конфликты - очень важные навыки, которые пока что доступны только человеку.\n</p>';
                break;


            case 4:
                d.querySelector(".block1").innerHTML = '<div class="pnrm people"></div>\n<hr class="hr1">\n<h2>\nПоздравляем, вам больше подходит «сфера эстетики и искусства» \n</h2>\n<p>\nОна включает такие профессии как: художник, дизайнер, писатель, поэт,режиссер, артист, конструктор,косметолог, костюмер,гример,кондитер,портной-кутюрье,цветовод.\n</p>\n<p>Именно это мы развиваем в себе всю жизнь, начиная с младенчества, и именно здесь нас не сможет обойти робот. Умение продуктивно общаться и взаимодействовать в процессе совместной деятельности, учитывать позиции других участников деятельности и эффективно разрешать конфликты - очень важные навыки, которые пока что доступны только человеку.\n</p>';
                break;


            case 5:
                d.querySelector(".block1").innerHTML = '<div class="pnrm people"></div>\n<hr class="hr1">\n<h2>\nПоздравляем, вам больше подходит «сфера физического труда,подвижной деятельности» \n</h2>\n<p>\nОна включает такие профессии как: спортсмен, фотограф, экспедитор, парикмахер, бармен, официант, стюардесса, продавец, закройщик, специалист по ремонту, кассир, медперсонал, бригадир, кладовщик, почтальон, фермер, водитель-дальнобойщик, полицейский, военный.\n</p>\n<p>Именно это мы развиваем в себе всю жизнь, начиная с младенчества, и именно здесь нас не сможет обойти робот. Умение продуктивно общаться и взаимодействовать в процессе совместной деятельности, учитывать позиции других участников деятельности и эффективно разрешать конфликты - очень важные навыки, которые пока что доступны только человеку.\n</p>';
                break;

            case 6:
                d.querySelector(".block1").innerHTML = '<div class="pnrm people"></div>\n<hr class="hr1">\n<h2>\nПоздравляем, вам больше подходит «сфера материальных интересов,планово-экономических видов работ» \n</h2>\n<p>\nОна включает такие профессии как: экономист, администратор, менеджер, предприниматель, аудитор,специалист по рекламе, брокер, агент страховых компаний, коммерсант,завхоз.\n</p>\n<p>Именно это мы развиваем в себе всю жизнь, начиная с младенчества, и именно здесь нас не сможет обойти робот. Умение продуктивно общаться и взаимодействовать в процессе совместной деятельности, учитывать позиции других участников деятельности и эффективно разрешать конфликты - очень важные навыки, которые пока что доступны только человеку.\n</p>';
                break;
            default:
                break;
        }
    }
   
});


