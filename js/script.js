function myFunction(sw)
{
	var a = Number(document.getElementById("a").value);
	var b = Number(document.getElementById("b").value);
	var m = Number(document.getElementById("m").value);
	var fa = Number(document.getElementById("fa").value);
	var fb = Number(document.getElementById("fb").value);
	var fm = Number(document.getElementById("fm").value);

	var resultFa = valorFa(a);
	var resultFb = valorFb(b);
	var resultM =  valorM(a,b);
	var resultFm = valorFm(resultM);

	if(sw != 0)
	{
		document.getElementById("fa").value = resultFa;
		document.getElementById("fb").value = resultFb;
		document.getElementById("m").value = resultM;
		document.getElementById("fm").value = resultFm;
	}
	else
	{
		document.getElementById("a").value = "";
		document.getElementById("b").value = "";
		document.getElementById("m").value = "";
		document.getElementById("fa").value = "";
		document.getElementById("fb").value = "";
		document.getElementById("fm").value = "";
	}


}

function valorFa(a)
{
	var valorfa = (Math.pow(a,2)) - (4.9 * a) + (5.7 * Math.cos(0.01 * a));

	return valorfa;
}

function valorFb(b)
{
	var valorfb = (Math.pow(b,2)) - (4.9 * b) + (5.7 * Math.cos(0.01 * b));

	return valorfb;
}

function valorM(a,b)
{
	var valorMoperacion = (a + b) / 2;

	return valorMoperacion;
}

function valorFm(m)
{
	var valorOperacionM = (Math.pow(m,2)) - (4.9 * m) + (5.7 * Math.cos(0.01 * m)); 

	return valorOperacionM;
}