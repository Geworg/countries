function start() {
    with (document) {
        let l1 = String(getElementById('left1').value);
        let l2 = String(getElementById('left2').value);
        let l3 = String(getElementById('left3').value);
        let l4 = String(getElementById('left4').value);
        let l5 = String(getElementById('left5').value);
        let r1 = String(getElementById('right1').value);
        let r2 = String(getElementById('right2').value);
        let r3 = String(getElementById('right3').value);
        let r4 = String(getElementById('right4').value);
        let r5 = String(getElementById('right5').value);
        let result = 0;
        let quality;
        if (l1 == 'Երևան') {
            result += 2
            document.getElementById('left1').style.backgroundColor = 'green'
        }
        else {
            document.getElementById('left1').style.backgroundColor = 'red'
        }
        if (l2 == 'Բուենոս—Այրես') {
            result += 2
            document.getElementById('left2').style.backgroundColor = 'green'
        }
        else {
            document.getElementById('left2').style.backgroundColor = 'red'
        }
        if (l3 == 'Տոկիո') {
            result += 2
            document.getElementById('left3').style.backgroundColor = 'green'
        }
        else {
            document.getElementById('left3').style.backgroundColor = 'red'
        }
        if (l4 == 'Փարիզ') {
            result += 2
            document.getElementById('left4').style.backgroundColor = 'green'
        } else {
            document.getElementById('left4').style.backgroundColor = 'red'
        }
        if (l5 == 'Օսլո') {
            result += 2
            document.getElementById('left5').style.backgroundColor = 'green'
        } else {
            document.getElementById('left5').style.backgroundColor = 'red'
        }
        if (r1 == 'Լիսաբոն') {
            result += 2
            document.getElementById('right1').style.backgroundColor = 'green'
        } else {
            document.getElementById('right1').style.backgroundColor = 'red'
        }
        if (r2 == 'Ստոկհոլմ') {
            result += 2
            document.getElementById('right2').style.backgroundColor = 'green'
        } else {
            document.getElementById('right2').style.backgroundColor = 'red'
        }
        if (r3 == 'Օկտավա') {
            result += 2
            document.getElementById('right3').style.backgroundColor = 'green'
        } else {
            document.getElementById('right3').style.backgroundColor = 'red'
        }
        if (r4 == 'Բրազիլիա') {
            result += 2
            document.getElementById('right4').style.backgroundColor = 'green'
        } else {
            document.getElementById('right4').style.backgroundColor = 'red'
        }
        if (r5 == 'Մադրիդ') {
            result += 2
            document.getElementById('right5').style.backgroundColor = 'green'
        } else {
            document.getElementById('right5').style.backgroundColor = 'red'
        }
        if (result <= 6) {
            quality = 'Վատ'
            document.getElementById('score').color = 'pink'
            document.getElementById('answer').color = 'pink'
        }
        else if (result > 6 && result <= 18) {
            quality = 'Լավ'
            document.getElementById('score').color = 'purple'
            document.getElementById('answer').color = 'purple'
        }
        else if (result > 18) {
            quality = 'Ընտիր'
            document.getElementById('score').color = 'orange'
            document.getElementById('answer').color = 'orange'
        }
        document.getElementById('score').innerHTML = result
        document.getElementById('answer').innerHTML = quality
    }
}