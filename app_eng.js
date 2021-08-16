const api_url = 'english.json';

async function getData() {
	const response = await fetch(api_url);
	// const response50 = await fetch(news_url); //this is for the live news/updates

	const data = await response.json();
	// const data50 = await response50.json();

    let t="";

    for (i = 1; i <= 2; i++) // data for the top 10 poems
    {
        t = "title"+i;
        document.getElementById(t).innerHTML = (data.title[i-1]);
    }

	//	console.log(data);

}

getData();