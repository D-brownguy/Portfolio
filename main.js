var buttn1 = document.getElementById("button1");
 var buttn2 = document.getElementById("button2");
 var buttn3 = document.getElementById("button3");
 var buttn4 = document.getElementById("button4");
 var buttn5 = document.getElementById("button5");
 var show2  = document.getElementById("connect");
 var show3  = document.getElementById("work");
 var show1  = document.getElementById("ab1tme");
 var show4 = document.getElementById("Skills");
 var show5 = document.getElementById("Blogs");
 var bg   = document.getElementById('bagd');
 var page1 = document.getElementById('aboutme');
 var profile = document.getElementById('profile-pic');
 var buttnback = document.getElementById('btnBack');
 var text = document.getElementById('text');
//  contact page
 var page2 = document.getElementById('MYContacts'); //whole page
 var toptext = document.getElementById('top-text'); //headings
 var toptext2 = document.getElementById('top-text2');
 var git = document.getElementById('Acc');
 var email = document.getElementById('Acc1');
 var Linked = document.getElementById('Acc2');
 var tweetr = document.getElementById('Acc3');
 var buttnback1 = document.getElementById('btnBack1');




    function mouseOver() {
      buttn1.style.opacity= .4;
      show1.classList.add('abtme');

      }

      function mouseOver1() {
        buttn2.style.opacity= .4;
        show2.classList.add("abtme");

      }

      function mouseOver2() {
        buttn3.style.opacity= .4;
        show3.classList.add('abtme');

      }

      function mouseOver3(){
        buttn4.style.opacity = .4;
        show4.classList.add('abtme');
      }

      function mouseOver4(){
        buttn5.style.opacity = .4;
        show5.classList.add('abtme');
      }

      function mouseOut() {
        buttn1.style.opacity= 1;
        buttn2.style.opacity= 1;
        buttn3.style.opacity= 1;
        buttn4.style.opacity= 1;
        show1.classList.remove('abtme');
        show2.classList.remove('abtme');
        show3.classList.remove('abtme');
        show4.classList.remove('abtme');
      }




  //Opening the pages
  function mousedown(){
    buttn1.style.opacity=0;
    page1.classList.add('Page1');
    text.classList.add('text');
    buttnback.classList.add('back');
    profile.classList.add('profile');

    page1.classList.remove('hidden');
    text.classList.remove('hidden');
    buttnback.classList.remove('hidden');
    profile.classList.remove('hidden');

  }

  function mousedown1(){
    buttn2.style.opacity=0;
    page2.classList.add('Page2');
    toptext.classList.add('t1');
    toptext2.classList.add('t2');
    git.classList.add('git');
    email.classList.add('gmail');
    Linked.classList.add('LinkedIN');
    tweetr.classList.add('twitter');
    buttnback1.classList.add('back1');

    page2.classList.remove('hidden');
    toptext.classList.remove('hidden');
    toptext2.classList.remove('hidden');
    git.classList.remove('hidden');
    email.classList.remove('hidden');
    Linked.classList.remove('hidden');
    tweetr.classList.remove('hidden');
    buttnback1.classList.remove('hidden');

  }





  function back(){
    page1.classList.remove('Page1');
    text.classList.remove('text');
    buttnback.classList.remove('back');
    profile.classList.remove('profile');

    page1.classList.add('hidden');
    text.classList.add('hidden');
    buttnback.classList.add('hidden');
    profile.classList.add('hidden');


  }

  function back1(){
    page2.classList.remove('Page2');
    toptext.classList.remove('t1');
    toptext2.classList.remove('t2')
    git.classList.remove('git');
    email.classList.remove('gmail');
    Linked.classList.remove('LinkedIN');
    tweetr.classList.remove('twitter');
    buttnback1.classList.remove('back1');

    page2.classList.add('hidden');
    toptext.classList.add('hidden');
    toptext2.classList.add('hidden');
    git.classList.add('hidden');
    email.classList.add('hidden');
    Linked.classList.add('hidden');
    tweetr.classList.add('hidden');
    buttnback1.classList.add('hidden');
  }







