let a = 1
var test = new Vue({
    el: '#test',
    data:{
        intro: '당신의 오늘은 어떤가요? \n 당신에게 맞는 음식을 테스트해보세요',
        title: '오늘의 음식',
        index: 0,
        question: [],
        answer: [],
        selection: [],
        result: ''
    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();

        //question
        this.question.push('1. 나는 매운 음식을');
        
        this.question.push('1. 나는 매운 음식을2');
        this.answer.push(['신라면도 나에겐 고난','불닭볶음면은 귀여운 수준']);
        this.answer.push(['신라면도 나에겐 고난','불닭볶음면은 귀여운 수준2']);
    },
    methods: {
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();
        },
        prev: function() {
            alert('prev test');
            this.index=a;
        },
        next: function() {
            // $('#intro').hide();
            // $('#main').hide();
            // $('#result').show();
            index=a;
            //result
            this.result = '살려줘';
        }
    }
});