const api_url = 'english.json';

async function getData() {
	const response = await fetch(api_url);
	// const response50 = await fetch(news_url); //this is for the live news/updates

	const data = await response.json();
	// const data50 = await response50.json();

    let t="";

    for (i = 1; i <= 12; i++) // data for the top 10 poems
    {
        t = "title"+i;
        document.getElementById(t).innerHTML = data
    }

	document.getElementById("india-total").innerHTML = (data.statewise[0].confirmed);
	//  console.log(data.statewise[0].confirmed);
	document.getElementById("india-recovered").innerHTML = (data.statewise[0].recovered);
	//	console.log(data.statewise[0].recovered);
	document.getElementById("india-deaths").innerHTML = (data.statewise[0].deaths);
	//	console.log(data.statewise[0].deaths);
	//	console.log(data.statewise);
	//	console.log(data);


}

getData();