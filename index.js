Vue.createApp({
    data() {
        return {
            myStr: "",
            myStr2: "",
            myStr3: "",
            myStr4: "",
            myStr5: "",
            myStr6: "",
            lastChar: "",
            length: 0
        }
    },
    methods: {
        firstString() {
            return this.myStr;
        },
        stringToUpperCase() {
            this.myStr2 = this.myStr.toUpperCase();
            return this.myStr2;
        },
        stringToLowerCase() {
            this.myStr3 = this.myStr.toLowerCase();
            return this.myStr3;
        },
        capitalizedString() {
            this.myStr4 = this.myStr.charAt(0).toUpperCase() + this.myStr.slice(1);
            return this.myStr4;
        },
        getLength() {
            this.length = this.myStr.Length();
        },
        capitalizedStringLastLetter() {
            this.lastChar = this.myStr.slice(-1).toUpperCase();
            this.myStr5 = this.myStr.slice(0,-1) + this.lastChar;
            return this.myStr5;
        },
        reverseString() {
            this.myStr6 = this.myStr.split("").reverse().join("");
            return this.myStr6;
        },
        stringManipulations() {
            this.firstString();
            this.stringToUpperCase();
            this.stringToLowerCase();
            this.capitalizedString();
            this.capitalizedStringLastLetter();
            this.reverseString();
        }
    }
}).mount("#app")
