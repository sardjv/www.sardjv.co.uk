---
layout: blog
title: NHS Improvement Clinical Workforce Project
nav_title: NHS Improvement Workforce Project
author: kevin
excerpt: Insert excerpt here. 
---

Being critical isn't our usual style. We're friendly, supportive and constructive by default. Unfortunately, we're being cornered and so our only option is to bite back in this situation. This is a fairly critical review of NHSI's Clinical Workforce Deployment project. It's uncomfortable for us to write but hope that it's received in the manner intended as constructive, robust criticism. We've worked very hard over 10 years to produce great systems for the NHS. We're hitting back because our baby is being threatened. We hope that the points will be well taken so that we can work together towards a shared goal. Some of those criticisms are about the technical competence of NHSI to lead this project. It's not said to be mean. This is a difficult, ambitious project BUT our technical alarm bells are ringing very loudly from our very experienced tech team. It would be remiss of us NOT to mention it.

Some readers may be aware of NHS Improvement's Workforce Deployment Systems project. It was launched in Birmingham on the 27th November 2018 and seeks to set a national model for:

 * contracts
 * technical specifications
 * levels of attainment 

in 

  * eRostering and,
  * Job Planning
  
### The Indicative Timeline from the Launch Event

<div class="row">
  <div class="col-xs-12 col-lg-9">
    <div class="thumbnail">
      <img src="/images/blog/kevin/nhs_improvement_clinical_workforce_project/indicative_timeline.jpg" alt="NHS Improvement Clinical Workforce Project">
      <div class="caption">
        <p>The indicative timeline presented at the Launch Event in Birmingham on 27th November 2018</p>
      </div>
    </div>
  </div>
</div>

Whilst we strongly support the aspirations of the project, we believe that the current approach needs to be heavily revised or even restarted. In this article, we'll outline why that approach is broken and headed for failure. Then, we'll give proven, concrete suggestions to get to the same goal.

First, let's discuss the aspirations and the end goal. We share this vision; just not the path.

The end goal is to have best of class, workforce planning systems that 'talk to each other'. In March and April this year, we've migrated Manchester, Leicester and George Elliot Hospitals from our competitors. This involved:

  * adding 3010 new user accounts
  * migrating 11,137 appraisals
  * and uploading 437,026 files
  
This was painful. It was painful because most of those competitors deliberately obstructed that process. One large competitor held a three hour meeting with the sole purpose of making migration to SARD difficult. Obstructions included:

  * handing over the data in PDF, image or CSV files 
  * giving the wrong passwords
  * transferring electronic data manually with USB sticks
  * broken and corrupted files
  * data with errors in it (wrong names in the data!)
  
Despite the challenges, our SARD technology and account management teams performed admirably. It felt like a battle. It was. We won.

The **correct** way to transfer data between systems is through APIs. An API is an [Application Programming Interface](https://en.wikipedia.org/wiki/Application_programming_interface). It sounds technical but don't switch off! It's just a way to get systems to 'talk to each other'. NHSI have correctly identified that improved Workforce Deployment needs APIs. Where they've fundamentally gone wrong is to assume they need to be designed, planned and mandated centrally by them. They don't. This isn't how the rest of the world works.

NHSI are mandating their own interface. This is a **fundamental error**. Put bluntly, it betrays NHSI's technical naivety and the largest providers are rubbing their hands all the way to the bank. To put this right, we need to understand APIs better. I'll try to explain what an API **is** (and more importantly what it **isn't**) without any technical jargon.

### What's an API? (no technical jargon version)

Let's imagine an API is a real world thing. Let's pretend our API is a McDonald's fast food restaurant. An API is a service. It's a window / counter / service hatch / squeaky drive-thru ordering thing that gives you access to the output of a more complicated process. You don't have to cut the potatoes up or kill the cow. Never look inside the sausage factory. That stuff is private! The interface exposes the service. Another name for APIs is "Web **Service**".

#### Lesson 1. - Where to start


#### Lesson 2 - It's a window to a service, not a handshake.

The term 'interface' sends us down the wrong path. It implies two entities 'facing' each other. Before I was building APIs, I'd always thought of interfaces as a handshake between two disparate systems reaching out to each other. Maybe something like the French and the English building the channel tunnel. In a handshake interface, you journey towards each other and connect in the middle.

<div class="row">
  <div class="col-xs-12 col-sm-6">
    <div class="thumbnail">
      <iframe width="335" height="188" src="https://www.youtube.com/embed/Q5V-Hks0oDM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="caption">
        <p>An API is nothing like this. Even though you really want it to be because it's really cool.</p>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-6">
    <div class="thumbnail">
      <img src="https://media.giphy.com/media/o9hzIlJ4ijpAs/giphy.gif" alt="Keenan and Kel's Good Burger">
      <div class="caption">
        <p>An API is more like Keen and Kel's Good Burger.</p>
      </div>
    </div>
  </div>
</div>


This is a core point: An API is a service window, NOT a handshake interface between two systems. It's an important distinction. In a handshake, you need to know about the system you're interfacing with. Our fast-food seller would have to establish a contract with all 7 billion potential consumers. Which leads me to the next point... 

#### Lesson 2. - Passive, not active

An API is passive, not active. Because it's a service window / hatch / counter, you're relying on your consumers to arrive at your service. You don't run into the streets shouting "Hey! A burger has been cooked! Anybody want to eat it?". For the same reason, our SARD APIs don't 'update' or 'talk **TO**' another service. We don't actively announce that a "Job Plan has been completed" in our API. Services are provided then consumers, consume them. The hungry person walks into the restaurant.

We're often asked if our system "talks to ESR". For a technician, it's the wrong question. "Does ESR provide an API or webservice that is reliable and easy to consume?". "No" is the short answer. More on that later.

The diagram below shows interfaces as groups of interconnected systems. This is the 'handshake' concept of systems interoperability. Each 'integration' is the joining together of two systems. The dictionary definition of integration is:

> the act of combining or adding parts to make a unified whole

<div class="row">
  <div class="col-xs-12">
    <div class="">
      <img src="/images/blog/kevin/nhs_improvement_clinical_workforce_project/healthcare_systems_interconnectivity.png" alt="NHS Improvement Clinical Workforce Project">
      <div class="caption">
        <p>This is wrong. Don't approach systems interconnectivity with this mental model. Wrong. Wrong. Wrong. SOOOOooo wrong.</p>
      </div>
    </div>
  </div>
</div>


Synonyms of 'integration' are: combination, blending, fusing. These are bad mental models. This is not how systems connect in practice.

Outside of health tech, systems 'talk to each other' through a service provision and consumption model. The diagram below illustrates this. It's more like a street with each vendor providing a doorway or service hatch (API). All other vendors can then choose to consume (or not) the services of their neighbours. Some consumers don't provide a service themselves.

<div class="row">
  <div class="col-xs-12">
    <div class="">
      <img src="/images/blog/kevin/nhs_improvement_clinical_workforce_project/good_healthcare_systems_interconnectivity.png" alt="NHS Improvement Clinical Workforce Project">
      <div class="caption">
        <p>This is how APIs function in the real world. i.e. outside of healthcare. This is the way to do it.</p>
      </div>
    </div>
  </div>
</div>

Some shops on the high street may be a members club. You can't just walk in off the street and expect access to a member's club. In this case, you have to request a key to walk through the door. This is called an API Key.

### Lesson - computers are just another user with accessibility requirements

Imagine you had a user of your web application who was blind. Here's a few interesting facts about this user.

They... 

* are blind
* have a screen reader
* never sleep
* never eat
* don't require payment
* can read thousands of websites simultaneously
* have an incredible memory
* have incredible task specific intelligence

and they're also a computer.

Would you deny a blind person access to key features of your website? Would you consider them a threat to your application? Or would you consider yourself lucky to have such an adept super user? Would they deserve equal accessibility of your system?

A computer consuming an API is just another user of your system. Some companies don't understand this. They're frightened that opening up access to their system via an API is somehow a threat. They're frightened that API access exposes deep commercial secrets. It doesn't. It's just a system user with some accessibilty requirements that once granted allows them to work at incredible speed.  Making your system open to external computer control is just a user who is *very good at using your system*. That's not something to be scared of. That's something to embrace. The wrong headed technician thinks that exposing their functionality to external 'fly by wire' control somehow makes their system redundant?!? How could it!? It makes it MORE relevant. More established. It becomes an integral part of a wider eco system.

A recent communication with the Head of Systems Integration at NHS ESR underlines this point perfectly. When requesting access to ESR for our job planning system, the response was:

> "As ESR itself offers a “free to use” Appraisal and Job Planning functionality, we don’t currently have any interfaces/API’s for exchanging data with Appraisal or Job Planning systems. This is a Department of Health policy decision." - Head of Systems Integration at NHS ESR

Services you offer your end users are **EXACTLY** what you should be exposing via your API. If appraisals and job plans can be recorded on ESR, then a doctor completing the specific 


#### Lesson 2 - An API is a discoverable service. (or it should be)

Now that we have a 'high street of APIs' as a mental model, let's go inside McDonald's. The first thing we do is look at the menu. What can I do? APIs aren't that disimilar to a regular website. There's a menu of actions to be taken.

    LIST foods;
    
The system will return an indexed list of foods. On that list you can see a Big Mac. Just like a regular website, the API consumer clicks on 'The Big Mac' page.

    INFO ABOUT Big Mac;
    
 The API page might tell you:
 
 * price - £2.69
 * ingredients
 * meal deal options
 * what the box is made from
 * similar products

You notice that the product is part of a Big Mac Meal Deal. And then you wonder what other meal deals are available. So you go to the /meal_deals API page and it lists all the available meal deals. Then you see happy meals that come with a toy. What type of toy? Well, this month it's Teen Titans Go. Which toy do you want? So the API lists the Teen Titan Go characters. Now, you've already got Raven, but you'd really like Starfire. So you go to the Starfire API page. Starfire is out of stock, so you opt for Beast Boy. But when you go to Beast Boy API page, you realise that it's manufactured out of animal products and you'd forgotten you're a vegan who's allergic to nuts. So you request a list of all the purchaseable products that are suitable for vegans and don't contain nuts. You then go to create an order for 'A Bag of Carrot Sticks'. The order form includes delivery options. Do you want to pick it up from a location or have it delivered by UberEats, Deliveroo or DaveTheLocalBikeDeliveryMan? You opt for Deliveroo. McDonalds API connects (consumes) the Deliveroo API and discovers that they don't have any delivery people on this particular Monday. So you opt for Dave - The Local Delivery Man. You place your order via the API and happily munch your carrots.

Phew! That was exhausting. But we learnt that a simple food order can be very detailed and have lots of moving parts. We discovered in our API:

 * food items
 * prices
 * the local currency (pounds, euros or bitcoins?)
 * stock availability
 * meal deals
 * toys
 * Teen Titan Go characters (!?!) (this month only)
 * manufacturing materials
 * dietary preferences
 * allergies
 * ethical stances
 * delivery options
 * third party availability
 * collection locations
 * delivery time
 * ingredients
 * seasonal variants
 
Now imagine centrally planning your high street "eFastFood" service. That's a difficult job. Not all suppliers will be providing the same shaped FastFood thing. You might start with some obvious things like Burgers. You'll command "ALL FAST FOOD SUPPLIERS MUST SUPPLY BURGERS". You might get the reply "But we're a vegetarian restaurant!"

The point is that it's impossible to define the boundaries of the component services. Why would a food API contain a listing for toys? It's part of their business model. So our central planning team throw their arms up and allow for meta-data about toys. OK. Fine. "Dear supplier, please list all the toys you will provide." Then they reply, "But they change every month? And they're made out of different things which may make them unsuitable for Vegans." Let's not nail jelly to a wall. The idea of centrally planning interfaces is a bad one.

The design of the API service is the design of the supplier's system. Central API design dictates an uninspiring, bland, average concept of what a particular service must be. It says "Your product can be whatever you like but it MUST at least look EXACTLY like this." But the API service IS the product. Everything behind it is an implementation detail. At SARD, we spend hours, days,  months and years, developing that service. It's a continuous process of studying our client's problems, watching emerging technologies and evaluating complementary services. It never ends. The idea that a group of suppliers can sit around a meeting room table and hammer out a specification for The Model eRostering system is fanciful and deeply, deeply, WRONG.

What if you're ordering for for a group of people with different tastes, preferences, ethical positions? Maybe some want to get food from Prêt à Manger? It's feasible to purchase from a third party service that connects to all these restaurants. Which brings me to my next point...

#### Lesson - API networks can be a broad church.

Another misconception about purchasing integrated systems is the belief that you purchase one type of system for one requirement. Good integration opens up the possibility of something far greater. It opens up the possibility of purchasing a mix of systems that taken as a whole can solve your problems far better than any single offering. 

Here's a weird thing! I'm going to plug a competitor's product! Let's give an eRostering example with Rotamap. Rotamap are our competitors but we like them because they play nicely and their Managing Director - Rory - is a sound chap. Rotamap have an excellent product in the form of CWLRota. One of the reasons it's popular with anaesthetists and surgery teams is that it was built specifically with them in mind. For example, roster shifts don't have start and end times. They're morning and afternoon sessions. This makes sense in a surgical context. At a recent client visit to demonstrate our Artifical Intelligence based eRostering system, the client commented on their general satisfaction with CWLRota. As the old saying goes "If it ain't broke, don't fix it." However, our AI system would actually dovetail nicely into that process. Our rostering approach encompasses ALL resources, people, equipment, beds; along the entire breadth of a care pathway. There are enough problems in the NHS, that SARD tackling the whole system on our own is not going to work. This needs to be a team effort. Use the appropriate tools in the appropriate context. If a competitor has established processes in place that our clients are familiar with; we're cool with that. There's plenty for us to be getting on with. 

It's the same with mobile phones. NHS Trusts don't tend to obligate a specific phone or manufacturer. Maybe you like Apple, Android, Windows or Blackberry? Who cares!? Each staff member picks what's right for them. They can share common messaging platforms like WhatsApp.

Good APIs allow a swarm of best of class products to talk to each other. In this ecosystem, the whole workforce system is a bottom-up emergent order system.

Conversely, this is the danger of trying to centrally design a workforce system as a series of interlocking jigsaw pieces. The central plan defines the boundary between systems. The thinking is that The Market will just provide suppliers that fit that shape. This is wrong headed. "Innovate in precisely this way" is never going to work. Suppliers need to find their niche and solve problems that nobody has even thought about. The shape of the product **IS** the product.

You don't have to buy everything at the supermarket. Some suppliers will look like they supply the full suite but there's room for companies to specialise. Maybe you buy your meat from the butchers, and the fruit and veg from the fruit and veg shop. Good system interconnectivity along a high street of services opens up, not decreases, your options to purchase tailored products from a wider range of suppliers. 

#### Lesson - Tracking all services and consumption models will drive you insane

<div class="row">
  <div class="col-xs-12 col-sm-6">
    <div class="thumbnail">
      <img src="https://media.giphy.com/media/l0IylOPCNkiqOgMyA/giphy.gif" alt="Always Sunny in Philadelphia conspiracy theory">
      <div class="caption">
        <p>Trying to connect all the systems will drive you insane. So, don't!</p>
      </div>
    </div>
  </div>
</div>

#### Lesson 3. - Standards exist

MARVELous

<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>

<script type="text/javascript">
  $(document).ready(function() {
    console.log( "ready!" );
    var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

    api_key = '4c2e9182db0ad2eb7b20adcc57825c7f';

    marvel_hash = function(ts) {
      return MD5(ts + 'd38cd46a08f6bd410f4ab414736f0fbf0966d6cc' + api_key);
    }
    
    fetchCharacters = function(offset) {
    
      ts = Date.now();
      hash = marvel_hash(ts);
          
      $.get('https://gateway.marvel.com/v1/public/characters?limit=30&offset=' + offset + '&ts=' + ts + '&apikey=4c2e9182db0ad2eb7b20adcc57825c7f&hash=' + hash, function( data ) {
        character_results = data['data']['results'].filter(c => !/not_available/.test(c['thumbnail']['path']));
        updateCharactersTable(character_results);
        return character_results;
      });
    }
    
    updateCharactersTable = function(characters) {
      table = $('#marvel-characters .grid-items');
      table.empty();
      characters.forEach(
        function(c) {
          img_src = c['thumbnail']['path'] + '.' + c['thumbnail']['extension'];
          table.append(
            '<div class=\'grid-item col-xs-3 col-sm-2\' style="padding: 2px;">'+
              '<img class=\'img-responsive img-thumbnail\' src=\'' + img_src + '\'/>'+
            '</div>'  
          );
        }
      );
      
      var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 0
      });

      $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
      });
    }
    
    
    fetchCharacters(100);
    

    $('#marvel-search').submit(function () {
      console.log("Should search Marvel here");
      return false;
    });
    
    
  });
</script>

<form id="marvel-search">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>

<div id="marvel-characters" class="container-fluid">
  <div class="grid">
    <div class="grid-sizer col-xs-3 col-sm-2" style="margin-bottom:2px; padding: 2px;"></div>
    <div class="grid-items row">
    </div>
  </div>
  <div style="display:block;clear:both;"></div>
</div>

<table id="marvel-characters" class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>  
  <tbody>
  </tbody>
</table>

#### Lesson 4 - There's no hub. Everything can connect to everything else

Another oft used term is 'interoperability'. If you do a [Google Image search for interoperability](https://www.google.com/search?tbm=isch&q=interoperability), you'll see hundreds of diagrams of systems sitting around some sort of 'hub' interface.

<div class="row">
  <div class="col-xs-12 col-lg-9">
    <div class="thumbnail">
      <img src="/images/blog/kevin/nhs_improvement_clinical_workforce_project/interoperability_google_image_search.png" alt="NHS Improvement Clinical Workforce Project">
      <div class="caption">
        <p>The indicative timeline presented at the Launch Event in Birmingham on 27th November 2018</p>
      </div>
    </div>
  </div>
</div>

Again, this is a bad mental model. In practice, systems 'integrate' over a mesh. There's rarely a central hub. Not all systems connect with all others. System C might need to connect to WhatsApp but system B doesn't. But system B might need to connect to a payroll service. If you're familiar with social networks like Facebook, you'll be aware that friendship networks overlap in some areas. It's an interconnected mesh but not all friendships overlap. There's no hub.

### Who owns the interfaces?



### Enforcing standards

OK. I 


### Interface standards are for life not just for Christmas.


<div class="row">
  <div class="col-xs-12 col-lg-9">
    <div class="thumbnail">
      <img src="http://imgs.xkcd.com/comics/standards.png" alt="NHS Improvement Clinical Workforce Project">
    </div>
  </div>
</div>




### API Standards are like electrical sockets

> *"The great thing about standards is there's so many to choose from!" - Andrew S. Tanenbaum*

When ????? delivered his speech at the NHSI launch event, he used plumbing as an analogy of what the NHS was hoping to achieve in developing common interfaces. The suggestion was that

Could you imagine how 

#### Meetings are not the place for collaborative documentation

### If you don't like it, fork it!

### Lesson 5 -  ESR needs a nAPI

### Concrete recommendations

I promised some concrete recommendations based on everything discussed above. We believe criticism should be constructive so here's the constructive part.

1. **Start again.**  

2. Mandate API control of all current user actions.

3. Mandate API standards

4. Lawyer up





5. Make documentation collaborative

6. Build a nAPI

7. Stand back. Less is more. Focusing on mandating an API for all user actions should singularly be all that's required. Everything else is obfuscation and distracts from that laser focus goal. Mandating API control of all user functions will be a big enough challenge.

8. Spread this message

9. Have some acid tests:

  * Will anything change?
  * Does it hurt?

10. API Keys under control of clients

11. Stay out of procurement. Mandatory API access should be applied to all products supplied to the NHS. But picking what those products should be is a matter for individual trusts.

12. Zero meetings.

