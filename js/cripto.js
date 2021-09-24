	// ========================================
    //
    // CriptoKai created by Kainan Henrique
    // Copyright © 2021 Na18k
    //
    //  Creator - Na18k(GitHub): https://github.com/Na18k
    //  Project page: https://github.com/Na18k/CriptoKai
    //
    // ========================================

    // Obtem elementos do HTML
	let mensagem = document.querySelector('.mensagem');
	// var input = document.querySelector("input");
    var input = document.getElementById("input");
    var button = document.getElementById("cripto");
    var buttonDescripto = document.getElementById("descripto");

    // Valor do input inicial (Não mexer!)
    var valor = "";

// Presets de caracteres (Alterável)
    var caracter = 10;

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
        var space = "1903890422";
        var quebraDeLinha = "1234567890";

        var AAcento = "3722092239"; // Á
        var aAcento = "3098508202"; // á
        var AGrave = "3697618732"; // À
        var aGrave = "3373257631"; // à
        var ATil = "3967936648"; // Ã
        var aTil = "3010513981"; // Ã
        var ACircunflexo = "3958913327"; // Â
        var aCircunflexo = "3126428227"; // â
        var ATrema = "3155078881"; // Ä
        var aTrema = "3301960622"; // Ä
        var aa = "3711144789"; // ɐ̃

        var CCedilha = "3323692580"; // Ç
        var cCedilha = "3634821967"; // ç

        var EAcento = "3610061813"; // É
        var eAcento = "3801018227"; // é
        var EGrave = "3775851971"; // È
        var eGrave = "3669451025"; // è
        var ECircunflexo = "3620431474"; // Ê
        var eCircunflexo = "3775197024"; // ê
        var ETrema = "3562820051"; // Ë
        var eTrema = "3894354904"; // ë

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

        var YAcento = "3976721365"; // Ý
        var yAcento = "3976721365"; // ý


        var trema = "3693973298"; // ¨

    // Caracteres especiais:

        var acento = "4648375119"; // ´
        var grave = "4293467847"; // `
        var circunflexo = "4416142048"; // ^
        var til = "4914341664"; // ~

        var menos = "4962134179"; // -
        var mais = "4861300916"; // +
        var igual = "4347162777" // =
        var asterisco = "4828225651"; // *
        var barra = "4248626792"; // /
        var barraInvertida = "4534322308"; // \
        var virgula = "4251966949"; // ,
        var exclamacao = "4008435343"; // !
        var interrogacao = "4586008648"; // ?
        var ponto = "4044337533" // .
        var doisPontos = "4686783022" // :
        var grau = "4805474324"; // °
        var arroba = "4483165161"; // @
        var cerquilha = "4686220181"; // #
        var cifrao = "4568497809"; // $
        var porcentagem = "4501985519"; // %
        var ampersand = "4138161563"; // &
        var apostrofo = "4194264837"; // '
        var aspas = `4835917089`; // " 
        var pont1 = "4748643441"; // ¹
        var pont2 = "4478046663"; // ²
        var pont3 = "4987168816"; // ³

        var libra = "4334684113"; // £
        var centavo = "4435640189"; // ¢
        // var ¬ = "¬"; // ¬ Esse caractere se apresenta como invalido
        var parentesesEsquerdo = "4972368212"; // (
        var parentesesDireito = "4982006362"; // )
        var chaveEsquerdo = "4080946098"; // {
        var chaveDireiro = "4021553029"; // }
        var colcheteEsquerdo = "4756787636"; // [
        var colcheteDireiro = "4512037906"; // ]
        var paragrafo = "4735656261"; // §
        var pontoEVirgula = "4377022311"; // ;

    // Fim das presets

// ============== Começo do Cripto ==============
    function criptoFunc(caracterPrimario, caracterSecundario, cont) {
        if(valor.substring(cont, cont + 1) == caracterPrimario) {
            criptoFeito.push(caracterSecundario);
        }
    }
    function criptoFazer() {

        // Não mexer
        valor = input.value;

        for(var cont = 0; cont < valor.length; cont++) {
         // vai repetir até as letras acabarem

            // A
            criptoFunc("A", A, cont);
            criptoFunc("a", a, cont);
            criptoFunc("Á", AAcento, cont);
            criptoFunc("á", aAcento, cont);
            criptoFunc("À", AGrave, cont);
            criptoFunc("à", aGrave, cont);
            criptoFunc("Ã", ATil, cont);
            criptoFunc("ã", aTil, cont);
            criptoFunc("Â", ACircunflexo, cont);
            criptoFunc("â", aCircunflexo, cont);
            criptoFunc("Ä", ATrema, cont);
            criptoFunc("ä", aTrema, cont);                
                // ɐ̃
                criptoFunc("ɐ̃", aa, cont);

            // B
            criptoFunc("B", B, cont);
            criptoFunc("b", b, cont);

            // C Ç
            criptoFunc("C", C, cont);
            criptoFunc("c", c, cont);
            criptoFunc("Ç", CCedilha, cont);
            criptoFunc("ç", cCedilha, cont);

            // D 
            criptoFunc("D", D, cont);
            criptoFunc("d", d, cont);

            // E É È Ë Ê 
            criptoFunc("E", E, cont);
            criptoFunc("e", e, cont);
            criptoFunc("É", EAcento, cont);
            criptoFunc("é", eAcento, cont);
            criptoFunc("È", EGrave, cont);
            criptoFunc("è", eGrave, cont);
            criptoFunc("Ê", ECircunflexo, cont);
            criptoFunc("ê", eCircunflexo, cont);
            criptoFunc("Ë", ETrema, cont);
            criptoFunc("ë", eTrema, cont);

            // F 
            criptoFunc("F", F, cont);
            criptoFunc("f", f, cont);

            // G 
            criptoFunc("G", G, cont);
            criptoFunc("g", g, cont);

            // H
            criptoFunc("H", H, cont);
            criptoFunc("h", h, cont);

            // I Í Ì Ï Î 
            criptoFunc("I", I, cont);
            criptoFunc("i", i, cont);
            criptoFunc("Í", IAcento, cont);
            criptoFunc("í", iAcento, cont);
            criptoFunc("Ì", IGrave, cont);
            criptoFunc("ì", iGrave, cont);
            criptoFunc("Ï", ITrema, cont);
            criptoFunc("ï", iTrema, cont);
            criptoFunc("Î", ICircunflexo, cont);
            criptoFunc("î", iCircunflexo, cont);

            // J
            criptoFunc("J", J, cont);
            criptoFunc("j", j, cont);

            // K
            criptoFunc("K", K, cont);
            criptoFunc("k", k, cont);

            // L
            criptoFunc("L", L, cont);
            criptoFunc("l", l, cont);

            // M
            criptoFunc("M", M, cont);
            criptoFunc("m", m, cont);

            // N Ñ
            criptoFunc("N", N, cont);
            criptoFunc("n", n, cont);
            criptoFunc("Ñ", NTil, cont);
            criptoFunc("ñ", nTil, cont);

            // O Ö Ô Õ Ò Ó 
            criptoFunc("O", O, cont);
            criptoFunc("o", o, cont);
            criptoFunc("Ó", OAcento, cont);
            criptoFunc("ó", oAcento, cont);
            criptoFunc("Ò", OGrave, cont);
            criptoFunc("ò", oGrave, cont);
            criptoFunc("Ô", OCircunflexo, cont);
            criptoFunc("ô", oCircunflexo, cont);
            criptoFunc("Õ", OTil, cont);
            criptoFunc("õ", oTil, cont);
            criptoFunc("Ö", OTrema, cont);
            criptoFunc("ö", oTrema, cont);

            // P 
            criptoFunc("P", P, cont);
            criptoFunc("p", p, cont);

            // Q 
            criptoFunc("Q", Q, cont);
            criptoFunc("q", q, cont);

            // R 
            criptoFunc("R", R, cont);
            criptoFunc("r", r, cont);

            // S 
            criptoFunc("S", S, cont);
            criptoFunc("s", s, cont);

            // T 
            criptoFunc("T", T, cont);
            criptoFunc("t", t, cont);

            // U Ü Ù Ú Û 
            criptoFunc("U", U, cont);
            criptoFunc("u", u, cont);
            criptoFunc("Ú", UAcento, cont);
            criptoFunc("ú", uAcento, cont);
            criptoFunc("Ù", UGrave, cont);
            criptoFunc("ù", uGrave, cont);
            criptoFunc("Û", UCircunflexo, cont);
            criptoFunc("û", uCircunflexo, cont);

            // V 
            criptoFunc("V", V, cont);
            criptoFunc("v", v, cont);

            // W 
            criptoFunc("W", W, cont);
            criptoFunc("w", w, cont);

            // X 
            criptoFunc("X", X, cont);
            criptoFunc("x", x, cont);

            // Y Ý
            criptoFunc("Y", Y, cont);
            criptoFunc("y", y, cont);
            criptoFunc("Ý", YAcento, cont);
            criptoFunc("ý", yAcento, cont);

            // Z
            criptoFunc("Z", Z, cont);
            criptoFunc("z", z, cont);

            // =============
            // Números:
            // =============

            // 0
            criptoFunc("0", num0, cont);
            // 1
            criptoFunc("1", num1, cont);
            // 2
            criptoFunc("2", num2, cont);
            // 3
            criptoFunc("3", num3, cont);
            // 4
            criptoFunc("4", num4, cont);
            // 5
            criptoFunc("5", num5, cont);
            // 6
            criptoFunc("6", num6, cont);
            // 7 
            criptoFunc("7", num7, cont);
            // 8
            criptoFunc("8", num8, cont);
            // 9
            criptoFunc("9", num9, cont);
            // ==================
            // Especiais:
            // ==================

            criptoFunc(" ", space, cont);

            criptoFunc("´", acento, cont);
            criptoFunc("`", grave, cont);
            criptoFunc("^", circunflexo, cont);
            criptoFunc("~", til, cont);

            criptoFunc("-", menos, cont);
            criptoFunc("+", mais, cont);
            criptoFunc("=", igual, cont);
            criptoFunc("*", asterisco, cont);
            criptoFunc("/", barra, cont);
            criptoFunc("\\", barraInvertida, cont);
            criptoFunc(",", virgula, cont);
            criptoFunc("!", exclamacao, cont);
            criptoFunc("?", interrogacao, cont);
            criptoFunc("°", grau, cont);
            criptoFunc("@", arroba, cont);
            criptoFunc("#", cerquilha, cont);
            criptoFunc("$", cifrao, cont);
            criptoFunc("%", porcentagem, cont);
            criptoFunc("&", ampersand, cont);
            criptoFunc("'", apostrofo, cont);
            criptoFunc("\u0022", aspas, cont);
            criptoFunc("¹", pont1, cont);
            criptoFunc("²", pont2, cont);
            criptoFunc("$", pont3, cont);

            criptoFunc("£", libra, cont);
            criptoFunc("¢", centavo, cont);
            // criptoFunc("¬", ¬, cont);
            criptoFunc("(", parentesesEsquerdo, cont);
            criptoFunc(")", parentesesDireito, cont);

            criptoFunc("{", chaveEsquerdo, cont);
            criptoFunc("}", chaveDireiro, cont);

            criptoFunc("[", colcheteEsquerdo, cont);
            criptoFunc("]", colcheteDireiro, cont);

            criptoFunc("§", paragrafo, cont);
            criptoFunc(";", pontoEVirgula, cont);

            criptoFunc(".", ponto, cont);
            criptoFunc(":", doisPontos, cont);

            criptoFunc("\n", quebraDeLinha, cont);

            // console.log(cont + 1); // Não recomedavel usar, apenas para desenvolvedor!!
            logConsole[0] = cont;
        }
        
    }
    var criptoFeito = [];

// ============== Incio do DESCripto ==============

    function descriptoFunc(caracterPrimario, caracterSecundario, cont) {
        if(valor.slice(cont, cont + caracter) == caracterPrimario) {
                descriptoFeito.push(caracterSecundario);
        }
    }

    function descripto() {
        // Não mexer
        valor = input.value;

        for(var cont = 0; cont < valor.length; cont = cont + caracter) {
         // vai repetir até as letras acabarem

            // A Á À Ã Â Ä 
            descriptoFunc(A, "A", cont);
            descriptoFunc(a, "a", cont);
            descriptoFunc(AAcento, "Á", cont);
            descriptoFunc(aAcento, "á", cont);
            descriptoFunc(AGrave, "À", cont);
            descriptoFunc(aGrave, "à", cont);
            descriptoFunc(ATil, "Ã", cont);
            descriptoFunc(aTil, "ã", cont);
            descriptoFunc(ACircunflexo, "Â", cont);
            descriptoFunc(aCircunflexo, "â", cont);
            descriptoFunc(ATrema, "Ä", cont);
            descriptoFunc(aTrema, "Ä", cont);
                // ɐ̃
                descriptoFunc(aa, "ɐ̃", cont);

            // B
            descriptoFunc(B, "B", cont);
            descriptoFunc(b, "b", cont);
            // C Ç
            descriptoFunc(C, "C", cont);
            descriptoFunc(c, "c", cont);
            descriptoFunc(CCedilha, "Ç", cont);
            descriptoFunc(cCedilha, "ç", cont);
            // D
            descriptoFunc(D, "D", cont);
            descriptoFunc(d, "d", cont);
            // E É È Ê Ë
            descriptoFunc(E, "E", cont);
            descriptoFunc(e, "e", cont);
            descriptoFunc(EAcento, "É", cont);
            descriptoFunc(eAcento, "é", cont);
            descriptoFunc(EGrave, "È", cont);
            descriptoFunc(eGrave, "è", cont);
            descriptoFunc(ECircunflexo, "Ê", cont);
            descriptoFunc(eCircunflexo, "ê", cont);
            descriptoFunc(ETrema, "Ë", cont);
            descriptoFunc(eTrema, "ë", cont);
            // F
            descriptoFunc(F, "F", cont);
            descriptoFunc(f, "f", cont);
            // G
            descriptoFunc(G, "G", cont);
            descriptoFunc(g, "g", cont);
            // H
            descriptoFunc(H, "H", cont);
            descriptoFunc(h, "h", cont);
            // I Í Ì Î Ï
            descriptoFunc(I, "I", cont);
            descriptoFunc(i, "i", cont);
            descriptoFunc(IAcento, "Í", cont);
            descriptoFunc(iAcento, "í", cont);
            descriptoFunc(IGrave, "Ì", cont);
            descriptoFunc(iGrave, "ì", cont);
            descriptoFunc(ICircunflexo, "Î", cont);
            descriptoFunc(iCircunflexo, "î", cont);
            descriptoFunc(ITrema, "Ï", cont);
            descriptoFunc(iTrema, "ï", cont);
            // J
            descriptoFunc(J, "J", cont);
            descriptoFunc(j, "j", cont);
            // K
            descriptoFunc(K, "K", cont);
            descriptoFunc(k, "k", cont);
            // L
            descriptoFunc(L, "L", cont);
            descriptoFunc(l, "l", cont);
            // M
            descriptoFunc(M, "M", cont);
            descriptoFunc(m, "m", cont);
            // N
            descriptoFunc(N, "N", cont);
            descriptoFunc(n, "n", cont);
            // O Ó Ò Ô Ô Ö
            descriptoFunc(O, "O", cont);
            descriptoFunc(o, "o", cont);
            descriptoFunc(OAcento, "Ó", cont);
            descriptoFunc(oAcento, "ó", cont);
            descriptoFunc(OGrave, "Ò", cont);
            descriptoFunc(oGrave, "ò", cont);
            descriptoFunc(OTil, "Õ", cont);
            descriptoFunc(oTil, "õ", cont);
            descriptoFunc(OCircunflexo, "Ô", cont);
            descriptoFunc(oCircunflexo, "ô", cont);
            descriptoFunc(OTrema, "Ö", cont);
            descriptoFunc(oTrema, "ö", cont);
            // P
            descriptoFunc(P, "P", cont);
            descriptoFunc(p, "p", cont);
            // Q
            descriptoFunc(Q, "Q", cont);
            descriptoFunc(q, "q", cont);
            // R
            descriptoFunc(R, "R", cont);
            descriptoFunc(r, "r", cont);
            // S
            descriptoFunc(S, "S", cont);
            descriptoFunc(s, "s", cont);
            // T
            descriptoFunc(T, "T", cont);
            descriptoFunc(t, "t", cont);
            // U Ú Ù Û Ü
            descriptoFunc(U, "U", cont);
            descriptoFunc(u, "u", cont);
            descriptoFunc(UAcento, "Ú", cont);
            descriptoFunc(uAcento, "ú", cont);
            descriptoFunc(UGrave, "Ù", cont);
            descriptoFunc(uGrave, "ù", cont);
            descriptoFunc(UCircunflexo, "Û", cont);
            descriptoFunc(uCircunflexo, "û", cont);
            descriptoFunc(UTrema, "Ü", cont);
            descriptoFunc(uTrema, "ü", cont);
            // V
            descriptoFunc(V, "V", cont);
            descriptoFunc(v, "v", cont);
            // W
            descriptoFunc(W, "W", cont);
            descriptoFunc(w, "w", cont);
            // X
            descriptoFunc(X, "X", cont);
            descriptoFunc(x, "x", cont);
            // Y Ý
            descriptoFunc(Y, "Y", cont);
            descriptoFunc(y, "y", cont);
            descriptoFunc(YAcento, "Ý", cont);
            descriptoFunc(yAcento, "ý", cont);
            // Z
            descriptoFunc(Z, "Z", cont);
            descriptoFunc(z, "z", cont);

            // =============
            //
            //  Números
            //
            // =============

            // 1
            descriptoFunc(num1, "1", cont);
            // 2
            descriptoFunc(num2, "2", cont);
            // 3
            descriptoFunc(num3, "3", cont);
            // 4
            descriptoFunc(num4, "4", cont);
            // 5
            descriptoFunc(num5, "5", cont);
            // 6
            descriptoFunc(num6, "6", cont);
            // 7
            descriptoFunc(num7, "7", cont);
            // 8
            descriptoFunc(num8, "8", cont);
            // 9
            descriptoFunc(num9, "9", cont);
            // 0
            descriptoFunc(num0, "0", cont);

            // =============================
            //
            // Especiais
            //
            // =============================

            descriptoFunc(space, " ", cont);

            descriptoFunc(acento, "´",cont);
            descriptoFunc(grave, "`",cont);
            descriptoFunc(circunflexo, "^", cont);
            descriptoFunc(til, "~",cont);

            descriptoFunc(menos, "-", cont);
            descriptoFunc(mais, "+", cont);
            descriptoFunc(igual, "=",cont);
            descriptoFunc(asterisco, "*",cont);
            descriptoFunc(barra, "/",cont);
            descriptoFunc(barraInvertida, "\\", cont);
            descriptoFunc(virgula, ",",cont);
            descriptoFunc(exclamacao, "!",cont);
            descriptoFunc(interrogacao, "?",cont);
            descriptoFunc(grau, "°",cont);
            descriptoFunc(arroba, "@",cont);
            descriptoFunc(cerquilha, "#",cont);
            descriptoFunc(cifrao, "$", cont);
            descriptoFunc(porcentagem, "%", cont);
            descriptoFunc(ampersand, "&", cont);
            descriptoFunc(apostrofo, "'",cont);
            descriptoFunc(aspas, "\u0022",cont);
            descriptoFunc(pont1, "¹",cont);
            descriptoFunc(pont2, "²",cont);
            descriptoFunc(pont3, "$",cont);

            descriptoFunc(libra, "£", cont);
            descriptoFunc(centavo, "¢", cont);
            // descriptoFunc("¬", ¬, cont);
            descriptoFunc(parentesesEsquerdo, "(", cont);
            descriptoFunc(parentesesDireito, ")", cont);

            descriptoFunc(chaveEsquerdo, "{", cont);
            descriptoFunc(chaveDireiro, "}", cont);

            descriptoFunc(colcheteEsquerdo, "[", cont);
            descriptoFunc(colcheteDireiro, "]", cont);

            descriptoFunc(paragrafo, "§", cont);
            descriptoFunc(pontoEVirgula, ";", cont);

            descriptoFunc(ponto, ".", cont);
            descriptoFunc(doisPontos, ":", cont);

            descriptoFunc(quebraDeLinha, "\n",cont);

            
            // console.log(cont + 1); // Não recomedavel usar, apenas para desenvolvedor!!
        }

    }
    var descriptoFeito = [];

// ============== Incio do Sistema ==============

    function print() {

        var imprimir = "";

        for(var cont2 = 0; cont2 < criptoFeito.length; cont2++) {
            imprimir = imprimir + criptoFeito[cont2];
        }
        mensagem.textContent = imprimir;
        console.log("Imprimir: " + imprimir);
    }

    function printDescripto() {

        var imprimirDescripto = "";

        for(var cont2 = 0; cont2 < descriptoFeito.length; cont2++) {
            imprimirDescripto = imprimirDescripto + descriptoFeito[cont2];
        }
        mensagem.textContent = imprimirDescripto;
        console.log("Imprimir Descripto: " + imprimirDescripto);
    }

    function limpa() {
        console.clear(); // Limpa o console
        imprimir = "Carregando...";
        imprimirDescripto = "Carregando...";
        criptoFeito = [];
        descriptoFeito = [];
        verificaVazio();
    }
    function verificaVazio() {
        if(!input.value) {
            console.log("O input está vazio");
            mensagem.innerHTML = `
                <h2>Atenção Erro!</h2>
                <strong><p>Ops! Parece que algo ocoreu errado</p></strong>
                <div class="erroMsgType">
                    <p><strong>Tipo de erro:</strong><em>"Falta de entrada"</em>
                    <br>
                    <br>
                    <br>
                    <strong>Possiveis soluções:</strong>
                    Por favor, insira algum valor no campo acima!</p>
                </div>
            `;
        }
    }
    
    // Sistema de chamar a criptografia
    	function startCripto() {
            limpa();
            criptoFazer();
            print();
            console.log("Terminado...");
            verifica();
            // consoleDeveloper();
            easterEgg();
    	}

        function startDescripto() {
            verificaVazio();
            limpa();
            descripto();
            printDescripto();
            console.log("descripto");
            verifica();
            // consoleDeveloper();
            easterEgg();
        }

        // Inicia a Criptográfia
    	button.onclick = startCripto;

        // resolve a Criptográfia
        buttonDescripto.onclick = startDescripto;

    function easterEgg() {
        valor = input.value;

        if(valor == "/12345") {
            mensagem.textContent = "12345 é uma senha incorreta!";
        }

        if(valor == "/eggs") {
            mensagem.innerHTML = `
                <h2>Easter Eggs</h2>
                <p>/12345 = 12345 é uma senha incorreta!</p>
            `
        }

    }

    function verifica() {
        verificaVazio();
    }

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
                verificaVazio();
        }