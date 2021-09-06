	// Obtem elementos do HTML
	let mensagem = document.querySelector('.mensagem');
	// var input = document.querySelector("input");
    var input = document.getElementById("input");
    var button = document.querySelector("button");

    // Valor do input inicial (Não mudar)
    var valor = "";

    // Presets de caracteres (Alterável)
    // var caracter = 62;

    // Letras
        var A = "1554614813";
        var B = "1077099881";
        var C = "1714400191";
        var D = "1249517393";
        var E = "1816791218";
        var F = "1386092847";
        var G = "1548186570";
        var H = "1926277282";
        var I = "1107719359";
        var J = "1491214817";
        var K = "1991894676";
        var L = "1794587171";
        var M = "1877997379";
        var N = "1918215246";
        var O = "1228371643";
        var P = "1893631603";
        var Q = "1500832006";
        var R = "1795874320";
        var S = "1335268392";
        var T = "1414351339";
        var U = "1510940759";
        var V = "1485144923";
        var W = "1049674266";
        var X = "1024618561";
        var Y = "1714180200";
        var Z = "1374288313";

        var a = "1637569343";
        var b = "1958822017";
        var c = "1903927886";
        var d = "1905051346";
        var e = "1672967276";
        var f = "1976153099";
        var g = "1056523961";
        var h = "1700452956";
        var i = "1494567724";
        var j = "1719914014";
        var k = "1381442982";
        var l = "1641580044";
        var m = "1421923239";
        var n = "1991531040";
        var o = "1657085207";
        var p = "1729195468";
        var q = "1203279274";
        var r = "1433009468";
        var s = "1720162799";
        var t = "1631091531";
        var u = "1004400145";
        var v = "1485238893";
        var w = "1635288224";
        var x = "1175219887";
        var y = "1981182750";
        var z = "1847713478";

    // Números
        var num0 = "2567982042";
        var num1 = "2210797845";
        var num2 = "2319637651";
        var num3 = "2543501012";
        var num4 = "2817925101";
        var num5 = "2967499576";
        var num6 = "2484994454";
        var num7 = "2770397700";
        var num8 = "2367404801";
        var num9 = "2581902569";

    // Especiais
        var space = "1903890422"

        var AAcento = "3722092239"; // Á
        var aAcento = "3098508202"; // á
        var AGrave = "3697618732"; // À
        var aGrave = "3373257631"; // à
        var ATil = "3967936648" // Ã
        var aTil = "3010513981" // Ã
        var ACircunflexo = "3958913327" // Â
        var aCiircunflexo = "3126428227" // â
        var ATrema = "3155078881" // Ä
        var aTrema = "3301960622" // Ä
        var aa = "3711144789"; // ɐ̃

        var CCedilha = "Ç";
        var cCedilha = "ç"; 

        var EAcento = "3610061813"; // É
        var eAcento = "3801018227"; // é
        var EGrave = "3801018227"; // È
        var eGrave = "3669451025"; // è
        var ECircunflexo = "3620431474" // Ê
        var eCircunflexo = "3775197024" // ê
        var ETrema = "3562820051" // Ë
        var eTrema = "3894354904" // ë

        var IAcento = "3980964490"; // Í
        var iAcento = "3030208837"; // í
        var IGrave = "3478022519"; // Ì
        var iGrave = "3627803548"; // ì
        var ICircunflexo = "3944655558" // Î
        var iCircunflexo = "3050365610" // î
        var ITrema = "3074560395" // Ï
        var iTrema = "3052727350" // ï

        var OAcento = "3558108159"; // Ó
        var oAcento = "3523116472"; // ó
        var OGrave = "3590262963"; // Ò
        var oGrave = "3151222491"; // ò
        var OTil = "3073474125" // Ã
        var oTil = "3167569770" // Ã
        var OCircunflexo = "3371680665" // Ô
        var oCircunflexo = "3997156923" // ô
        var OTrema = "3400538656" // Ö
        var oTrema = "3862045202" // ö

        var UAcento = "3436082105"; // Ú
        var uAcento = "3979188358"; // ú
        var UGrave = "3780934134"; // Ù
        var uGrave = "3113455933"; // ù
        var UCircunflexo = "3232772969" // Û
        var uCircunflexo = "3815349098" // û
        var UTrema = "3002996196" // Ü
        var uTrema = "3198730574" // ü

        var NTil = "3228105429"; // Ñ
        var nTil = "3494827683"; // ñ


        var trema = "3693973298"; // ¨

    // Caracteres especiais:

        var Acento = "´"; // ´
        var acento = "`"; // `
        var circunflexo = "^"; // ^
        var til = "~"; // ~

        var menos = "-"; // -
        var mais = "+"; // +
        var asterisco = "*"; // *
        var barra = "/"; // /
        // var barraEsquerda = "\"; // Não é possível adicionar no momento
        var virgula = ","; // ,
        var exclamação = "!"; // !
        var interogacao = "?"; // ?
        var grau = "°"; // °
        var arroba = "@"; // @
        var cerquilha = "#"; // #
        var cifrao = "$"; // $
        var porcento = "%"; // %
        var ampersand = "&"; // &
        var apostrofo = "'"; // '
        var aspas = `"`; // " 
        var pont1 = "¹"; // ¹
        var pont2 = "²"; // ²
        var pont3 = "³"; // ³

        var libra = "£"; // £
        var centavo = "¢"; // ¢
        // var ¬ = "¬"; // ¬
        var parentesesEsquerdo = "("; // (
        var parentesesDireito = ")"; // )
        var chaveEsquerdo = "{"; // {
        var chaveDireiro = "}"; // }
        var colcheteEsquerdo = "["; // [
        var colcheteDireiro = "]"; // ]
        var paragrafo = "§"; // §
        var pontoEVirgula = ";"; // ;




    // Fim das presets

    function criptoFazer() {

        // Não mexer
        valor = input.value;

        for(var cont = 0; cont < valor.length; cont++) {
         // vai repetir até as letras acabarem

            // A
            if(valor.substring(cont, cont + 1) == "A") {
                criptoFeito.push(A);
            }
            if(valor.substring(cont, cont + 1) == "a") {
                criptoFeito.push(a);
            }

            // B
            if(valor.substring(cont, cont + 1) == "B") {
                criptoFeito.push(B);
            }
            if(valor.substring(cont, cont + 1) == "b") {
                criptoFeito.push(b);
            }

            // C Ç
            if(valor.substring(cont, cont + 1) == "C") {
                criptoFeito.push(C);
            }
            if(valor.substring(cont, cont + 1) == "c") {
                criptoFeito.push(c);
            }
            if(valor.substring(cont, cont + 1) == "Ç") {
                criptoFeito.push(CCedilha);
            }
            if(valor.substring(cont, cont + 1) == "ç") {
                criptoFeito.push(cCedilha);
            }

            // D 
            if(valor.substring(cont, cont + 1) == "D") {
                criptoFeito.push(D);
            }
            if(valor.substring(cont, cont + 1) == "d") {
                criptoFeito.push(d);
            }

            // E É È Ë Ê 
            if(valor.substring(cont, cont + 1) == "E") {
                criptoFeito.push(E);
            }
            if(valor.substring(cont, cont + 1) == "e") {
                criptoFeito.push(e);
            }

            // F 
            if(valor.substring(cont, cont + 1) == "F") {
                criptoFeito.push(F);
            }
            if(valor.substring(cont, cont + 1) == "f") {
                criptoFeito.push(f);
            }

            // G 
            if(valor.substring(cont, cont + 1) == "G") {
                criptoFeito.push(G);
            }
            if(valor.substring(cont, cont + 1) == "g") {
                criptoFeito.push(g);
            }

            // H
            if(valor.substring(cont, cont + 1) == "H") {
                criptoFeito.push(H);
            }
            if(valor.substring(cont, cont + 1) == "h") {
                criptoFeito.push(h);
            }

            // I Í Ì Ï Î 
            if(valor.substring(cont, cont + 1) == "I") {
                criptoFeito.push(I);
            }
            if(valor.substring(cont, cont + 1) == "i") {
                criptoFeito.push(i);
            }

            // J
            if(valor.substring(cont, cont + 1) == "J") {
                criptoFeito.push(J);
            }
            if(valor.substring(cont, cont + 1) == "j") {
                criptoFeito.push(j);
            }

            // K
            if(valor.substring(cont, cont + 1) == "K") {
                criptoFeito.push(K);
            }
            if(valor.substring(cont, cont + 1) == "k") {
                criptoFeito.push(k);
            }

            // L
            if(valor.substring(cont, cont + 1) == "L") {
                criptoFeito.push(L);
            }
            if(valor.substring(cont, cont + 1) == "l") {
                criptoFeito.push(l);
            }

            // M
            if(valor.substring(cont, cont + 1) == "M") {
                criptoFeito.push(M);
            }
            if(valor.substring(cont, cont + 1) == "m") {
                criptoFeito.push(m);
            }

            // N Ñ
            if(valor.substring(cont, cont + 1) == "N") {
                criptoFeito.push(N);
            }
            if(valor.substring(cont, cont + 1) == "n") {
                criptoFeito.push(n);
            }
            if(valor.substring(cont, cont + 1) == "Ñ") {
                criptoFeito.push(NTio);
            }
            if(valor.substring(cont, cont + 1) == "ñ") {
                criptoFeito.push(nTio);
            } 

            // O Ö Ô Õ Ò Ó 
            if(valor.substring(cont, cont + 1) == "O") {
                criptoFeito.push(O);
            }
            if(valor.substring(cont, cont + 1) == "o") {
                criptoFeito.push(o);
            }

            // P 
            if(valor.substring(cont, cont + 1) == "P") {
                criptoFeito.push(P);
            }
            if(valor.substring(cont, cont + 1) == "p") {
                criptoFeito.push(p);
            }

            // Q 
            if(valor.substring(cont, cont + 1) == "Q") {
                criptoFeito.push(Q);
            }
            if(valor.substring(cont, cont + 1) == "q") {
                criptoFeito.push(q);
            }

            // R 
            if(valor.substring(cont, cont + 1) == "R") {
                criptoFeito.push(R);
            }
            if(valor.substring(cont, cont + 1) == "r") {
                criptoFeito.push(r);
            }

            // S 
            if(valor.substring(cont, cont + 1) == "S") {
                criptoFeito.push(S);
            }
            if(valor.substring(cont, cont + 1) == "s") {
                criptoFeito.push(s);
            }

            // T 
            if(valor.substring(cont, cont + 1) == "T") {
                criptoFeito.push(T);
            }
            if(valor.substring(cont, cont + 1) == "t") {
                criptoFeito.push(t);
            }

            // U Ü Ù Ú Û
            if(valor.substring(cont, cont + 1) == "U") {
                criptoFeito.push(U);
            }
            if(valor.substring(cont, cont + 1) == "u") {
                criptoFeito.push(u);
            }

            // V 
            if(valor.substring(cont, cont + 1) == "V") {
                criptoFeito.push(V);
            }
            if(valor.substring(cont, cont + 1) == "v") {
                criptoFeito.push(v);
            }

            // W 
            if(valor.substring(cont, cont + 1) == "W") {
                criptoFeito.push(W);
            }
            if(valor.substring(cont, cont + 1) == "w") {
                criptoFeito.push(w);
            }

            // X 
            if(valor.substring(cont, cont + 1) == "X") {
                criptoFeito.push(X);
            }
            if(valor.substring(cont, cont + 1) == "x") {
                criptoFeito.push(x);
            }

            // Y Ý 
            if(valor.substring(cont, cont + 1) == "Y") {
                criptoFeito.push(Y);
            }
            if(valor.substring(cont, cont + 1) == "y") {
                criptoFeito.push(y);
            }

            // Z
            if(valor.substring(cont, cont + 1) == "Z") {
                criptoFeito.push(Z);
            }
            if(valor.substring(cont, cont + 1) == "z") {
                criptoFeito.push(z);
            }

            // =============
            // Números:
            // =============

            // 0
            if(valor.substring(cont, cont + 1) == "0") {
                criptoFeito.push(num0);
            }

            // 1
            if(valor.substring(cont, cont + 1) == "1") {
                criptoFeito.push(num1);
            }

            // 2
            if(valor.substring(cont, cont + 1) == "2") {
                criptoFeito.push(num2);
            }

            // 3
            if(valor.substring(cont, cont + 1) == "3") {
                criptoFeito.push(num3);
            }

            // 4
            if(valor.substring(cont, cont + 1) == "4") {
                criptoFeito.push(num4);
            }

            // 5
            if(valor.substring(cont, cont + 1) == "5") {
                criptoFeito.push(num5);
            }

            // 6
            if(valor.substring(cont, cont + 1) == "6") {
                criptoFeito.push(num6);
            }

            // 7 
            if(valor.substring(cont, cont + 1) == "7") {
                criptoFeito.push(num7);
            }

            // 8
            if(valor.substring(cont, cont + 1) == "8") {
                criptoFeito.push(num8);
            }

            // 9
            if(valor.substring(cont, cont + 1) == "9") {
                criptoFeito.push(num9);
            }

            // ==================
            // Especiais:
            // ==================

            if(valor.substring(cont, cont + 1) == " ") {
                criptoFeito.push(space);
            }





            // console.log(cont + 1); // Não recomedavel usar, apenas para desenvolvedor!!
            logConsole[0] = cont;
        }
        
    }
    var criptoFeito = [];

    function print() {

        var imprimir = "";

        for(var cont2 = 0; cont2 < criptoFeito.length; cont2++) {
            imprimir = imprimir + criptoFeito[cont2];
        }
        mensagem.textContent = imprimir;
        console.log("Imprimir: " + imprimir);
    }

    function limpa() {
        console.clear(); // Limpa o console
        imprimir = "Carregando...";
        criptoFeito = [];
    }
    
	function startCripto() {
        limpa();
        criptoFazer();
        print();
        console.log("Terminado...");
        consoleDeveloper();
	}

    // Inicia a Criptográfia
	button.onclick = startCripto;




    // Recurso do Desenvolvedor (Desconsiderar)
        var logConsole = [
            0, // Número de Caracteres
        ];
        function consoleDeveloper() {

            // Console Desenvolvedor --->
                console.clear(); // Limpa o console

                console.log("Cripto by Kainan Henrique...");
                console.log("| ----- Console ----- |");
                console.log("");
                console.log("Input Value:" + input.value);
                console.log("Input length: " + valor.length);
                console.log("Variavel Inprimir: " + imprimir);
                // console.log("Cripto Feito: " + criptoFeito); // Não recomendável usar!!! No Use!!!
                console.log("Caracteres convertidos: " + logConsole[0]);
                console.log("");
                console.log("");
                console.log("");
                console.log("");
                console.log("=======Console========");
        }