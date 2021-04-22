let data = {
            method: "POST",
            action: "register.php",
            submit: "Зарегистрироваться",
                fields: [{
                    label: "Тип пользователя",
                    type: "info"
                }, {
                    name: "type",
                    label: "Юридическое лицо",
                    type: "radio",
                    value: "1",
                    necessary: true
                }, {
                    name: "type",
                    label: "Физическое лицо",
                    type: "radio",
                    value: "2",
                    necessary: true
                }, {
                    name: "fio",
                    label: "ФИО",
                    type: "text",
                    necessary: true
                }, {
                    name: "ogrn",
                    label: "ОГРН",
                    type: "text",
                    if: {
                        type: "1"
                    },
                    test: 13,
                    necessary: true
                }, {
                    name: "about",
                    label: "О себе",
                    type: "textarea",
                }]
        }

const container = document.querySelector('.container');

function createForm(object) {
    const form = document.createElement('div');
    form.classList.add('form-post');
    
    Object.entries(object).forEach(([key, value]) => {
        if(key.includes('method') | key.includes('action'))
        {
            form.setAttribute(`${key}`, value);
        }
    });
    
    return form;
}

function getFields(object) {
    let fieldsArray = [];
    Object.entries(object).forEach(([key, value]) => {
        if(key.includes('fields')){
            fieldsArray = value;
        }
    });

    return fieldsArray;
}

function drawText(object, parentNode) {
    const label = document.createElement('label');
    label.innerHTML = object.label;
    label.setAttribute('for', object.name == undefined ? " " : object.name);
    parentNode.append(label)

    if(object.type != 'info') {
        const textBox = document.createElement('input');
        textBox.setAttribute('type', 'text');
        textBox.setAttribute('name', object.name);
        textBox.setAttribute('id', object.name);
        textBox.value = object.value;
    
        if(object.necessary){
            textBox.required = true;
        }
    
        parentNode.append(textBox)
    }
}

function drawRadio(object, parentNode) {
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'radio');
    textBox.setAttribute('name', object.name);
    textBox.setAttribute('id', object.name);
    textBox.value = object.value;

    if(object.necessary){
        textBox.required = true;
    }

    parentNode.append(textBox)

    const label = document.createElement('label');
    label.innerHTML = object.label;
    label.setAttribute('for', object.name == undefined ? " " : object.name);

    parentNode.append(label)
}

function drawTextarea(object, parentNode) {
    const label = document.createElement('label');
    label.innerHTML = object.label;
    label.setAttribute('for', object.name == undefined ? " " : object.name);

    parentNode.append(label)

    const textarea = document.createElement('textarea');
    textarea.setAttribute('type', 'text');
    textarea.setAttribute('name', object.name);
    textarea.setAttribute('id', object.name);
    textarea.value = object.value;

    parentNode.append(textarea)
}

function drawind(array, parrentNode) {
    array.forEach(element => {
        console.log('element: ', element.type);
        const wrap = document.createElement('div');
        wrap.setAttribute('id', `_${element.name}`);
        
        if(element.type == 'info'){
            drawText(element, parrentNode);
        }
        if(element.type == 'text'){
            drawText(element, parrentNode);
        }
        if(element.type == 'radio'){
            drawRadio(element, parrentNode);
        }
        if(element.type == 'textarea'){
            drawTextarea(element, parrentNode);
        }
        // switch (element.type) {
        //     case 'info':
        //         drawText(element, parrentNode);
        //         break;
        //     case 'text':
        //         drawText(element, parrentNode);
        //         break;
        //     case 'radio':
        //         drawRadio(element, parrentNode);
        //     case 'textarea':
        //         drawTextarea(element, parrentNode);
        //     default:
        //         break;
        // }
    });
    
    parrentNode.innerHTML += 
    `
        <input type="submit" class="form-submit" value="Зарегистрироваться"></input>
        <br>
        <p>
        Поле «ОГРН» отображается только, если значение поля “type” равно 1, т.е. выбран вариант «Юридическое лицо»
        </p>
        <p>
        При отправке формы необходимо проверить, что поля “type”, “fio” не пусты. Если выбрано значение “type” == 1, “ogrn” так же должно быть не пусто и попадать под шаблон /^d{13}$/, т.е. содержать 13 цифр
        </p>
    `;
}

const form = createForm(data);
const fieldArray = getFields(data)
drawind(fieldArray, form);
container.append(form);

