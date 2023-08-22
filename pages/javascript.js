function load()
{
    let loadelement = Math.round(Math.random()*9+1);
    if(loadelement==1)
    {alert("Try new movies of south cinema 🤩🤩");}

    else if(loadelement==2)
    {alert("Whats today's plan for movies 😁😁?");}

    else if(loadelement==3)
    {alert("Watch the new arrival of tollywood 😎😎?");}

    else if(loadelement==4)
    {alert("The action you require in your life is all here 🤺🤺🤺 ?");}

    else if(loadelement==5)
    {alert("The old school romance 😍 movie you would love to watch is here!!");}

    else if(loadelement==6)
    {alert("Pushpa says: ZHUKEGA NHI SAALA!! 😂😂");}

    else if(loadelement==7)
    {alert("VIOLENCE VIOLENCE VIOLENCE, I don't like it I avoid, But VIOLENCE Likes me I can't avoid!! 😎😎");}

    else if(loadelement==8)
    {alert("What about spending your quality time on thrilling movies??");}

    else if(loadelement==9)
    {alert("Arival of new south movies, Don't miss");}

    else 
    {alert("Give yourself peaceful time by watching our tollwood new movies?");}
}

function watchlist()
{
    alert('Movie has been Added to Watchlist');
}

function lightmode()
{
    let bodyelement=document.getElementById('bodymode');
    bodyelement.classList.remove('bg-black');
    bodyelement.classList.add('bg-white');

    let textelement=document.getElementById('textmode');
    textelement.classList.remove('text-white');
    textelement.classList.add('text-black');

    let textelement1=document.getElementsById('text1');
    textelement1.classList.remove('text-white-50');
    textelement1.classList.add('text-black');

    let infoelementsita=document.getElementsById('infomode');
    infoelementsita.classList.remove('bg');
    infoelementsita.classList.add('bg-secondary');
}

/*function lightmodesita()
{
    let bodyelementsita=document.getElementById('bodymodesita');
    bodyelementsita.classList.remove('bg-black');
    bodyelementsita.classList.add('bg-white');

    let textelementsita=document.getElementById('textmodesita');
    textelementsita.classList.remove('text-white');
    textelementsita.classList.add('text-black');

    let infoelementsita=document.getElementsById('infomodesita')
    infoelementsita.classList.add('.bg-secondary.bg-gradient');
}*/

function darkmode()
{
    let bodyelement=document.getElementById('bodymode');
    bodyelement.classList.remove('bg-white');
    bodyelement.classList.add('bg-black');

    let textelement=document.getElementById('textmode');
    textelement.classList.remove('text-black');
    textelement.classList.add('text-white');
}

/*function darkmodesita()
    {let bodyelementsita=document.getElementById('bodymodesita');
    bodyelementsita.classList.remove('bg-white');
    bodyelementsita.classList.add('bg-black');

    let textelementsita=document.getElementById('textmodesita');
    textelementsita.classList.remove('text-black');
    textelementsita.classList.add('text-white');
}*/