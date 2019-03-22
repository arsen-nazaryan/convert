$(function () {

    $(function () {
        $('.dib-pos a[href^="index' + location.pathname.split("index")[1] + '"]').addClass('activeCase');
    });

    let changeCase,
        convertTo,
        splitStr,
        toList,
        i,
        armUpperCase = "փոքրատառ › ՄԵԾԱՏԱՌ",
        armTitleCase = "Առաջին Տառերը Մեծատառ",
        armLowerCase = "ՄԵԾԱՏԱՌ › փոքրատառ",
        rusUpperCase = "ВЕРХНИЙ РЕГИСТР",
        rusTitleCase = "Заглавные Буквы",
        rusLowerCase = "нижний регистр",
        engUpperCase = "TO UPPERCASE",
        engTitleCase = "To Capital Letters",
        engLowerCase = "to lower case";

    $('.dropdown-menu a').on('click', function () {
        toList = $('.dropdown-toggle');
        toList.html($(this).html());
        changeCase = toList.html();

        if (changeCase === armUpperCase || changeCase === rusUpperCase || changeCase === engUpperCase) {
            ToUpperCase();
        } else if (changeCase === armTitleCase || changeCase === rusTitleCase || changeCase === engTitleCase) {
            ToTitleCase();
        } else if (changeCase === armLowerCase || changeCase === rusLowerCase || changeCase === engLowerCase) {
            ToLowerCase();
        }

        /*ToupperCase*/
        function ToUpperCase() {
            convertTo = $("#befor").val();
            $("#after").text(convertTo.toUpperCase());
        }

        /*TolowerCase*/
        function ToLowerCase() {
            convertTo = $("#befor").val();
            $("#after").text(convertTo.toLowerCase());
        }

        /*TotitleCase*/
        function titleCase(str) {
            splitStr = str.toLowerCase().split(' ');
            for (i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            return splitStr.join(' ');
        }

        function ToTitleCase() {
            convertTo = $("#befor").val();
            $("#after").text(titleCase(convertTo));
        }

    });

});