const api_url = 'english.json';

async function getData() {
	const response = await fetch(api_url);
	// const response50 = await fetch(news_url); //this is for the live news/updates

	const data = await response.json();
	// const data50 = await response50.json();

    let t = "";
    let d = "";
    let dd = "";

    for (i = 1; i <= 2; i++) // data for the top 2 poems
    {
        t = "title"+i;
		d = "date"+i;
		dd = "desc"+i;
        document.getElementById(t).innerHTML = data.poems[i-1].title;
        document.getElementById(d).innerHTML = data.poems[i-1].date;
        document.getElementById(dd).innerHTML = data.poems[i-1].desc;
    }

    for (i = 3; i <= 6; i++) // data for the top poems (next 4)
    {
        t = "title"+i;
		d = "date"+i;
        document.getElementById(t).innerHTML = data.poems[i-1].title;
        document.getElementById(d).innerHTML = data.poems[i-1].date;
    }


	//	console.log(data);

}

getData();