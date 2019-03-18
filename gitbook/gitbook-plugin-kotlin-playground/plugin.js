require(['gitbook'], function (gitbook) {
    gitbook.events.bind("start", function () {
        KotlinPlayground('code.lang-kotlin-playground');
    });
    gitbook.events.bind("page.change", function () {
        KotlinPlayground('code.lang-kotlin-playground');
    });
});