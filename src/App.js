import React, { useEffect, useRef } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const wrapperDom = useRef();
  const btnDom = useRef();
  // const foldDom = useRef();
  const baseDom = useRef();

  useEffect(() => {
    const wrapper = document.getElementById("fold-effect");
    const btn = document.getElementById("btn-debug");

    const folds = Array.from(document.getElementsByClassName("fold"));

    const baseContent = document.getElementById("base-content");

    // const toggleDebug = () => {
    //   wrapper.classList.toggle("debug");
    // };
    // btn.addEventListener("click", toggleDebug);

    let state = {
      disposed: false,
      targetScroll: 0,
      scroll: 0,
    };

    function lerp(current, target, speed = 0.1, limit = 0.001) {
      let change = (target - current) * speed;
      if (Math.abs(change) < limit) {
        change = target - current;
      }
      return change;
    }
    let scaleFix = 0.992;

    class FoldedDom {
      constructor(wrapper, folds = null, scrollers = null) {
        this.wrapper = wrapper;
        this.folds = folds;
        this.scrollers = [];
      }
      setContent(baseContent, createScrollers = true) {
        const folds = this.folds;
        if (!folds) return;

        let scrollers = [];

        for (let i = 0; i < folds.length; i++) {
          const fold = folds[i];
          const copyContent = baseContent.cloneNode(true);
          copyContent.id = "";
          let scroller;
          if (createScrollers) {
            let sizeFixEle = document.createElement("div");
            sizeFixEle.classList.add("fold-size-fix");
            // sizeFixEle.style.transform = `scaleY(${scaleFix})`;

            scroller = document.createElement("div");
            scroller.classList.add("fold-scroller");
            sizeFixEle.append(scroller);
            fold.append(sizeFixEle);
          } else {
            scroller = this.scrollers[i];
          }
          scroller.append(copyContent);

          scrollers[i] = scroller;
        }
        this.scrollers = scrollers;
      }
      updateStyles(scroll, skewAmp, rotationAmp) {
        const folds = this.folds;
        const scrollers = this.scrollers;

        for (let i = 0; i < folds.length; i++) {
          const scroller = scrollers[i];

          // Scroller fixed so its aligned
          // scroller.style.transform = `translateY(${100 * -i}%)`;
          // And the content is the one that scrolls
          scroller.children[0].style.transform = `translateY(${scroll}px)`;
        }
      }
    }

    let insideFold;

    const centerFold = folds[Math.floor(folds.length / 2)];
    let tick = () => {
      if (state.disposed) return;

      // Calculate the scroll based on how much the content is outside the centerFold
      document.body.style.height =
        insideFold.scrollers[0].children[0].clientHeight - centerFold.clientHeight + window.innerHeight + "px";

      state.targetScroll = -(document.documentElement.scrollTop || document.body.scrollTop);
      state.scroll += lerp(state.scroll, state.targetScroll, 0.1, 0.0001);

      insideFold.updateStyles(state.scroll);
      // setScrollStyles(state.currentY);

      requestAnimationFrame(tick);
    };
    insideFold = new FoldedDom(wrapper, folds);
    insideFold.setContent(baseContent);

    tick();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <div className="content">
        <div className="fold-content" id="base-content">
          <div className="content__line">
            <h1 id="list-of-bail-funds-for-protestors-across-the-country">
              List of Bail Funds for Protestors across the Country
            </h1>

            <h2 id="national">National</h2>
            <ul>
              <li>
                <a href="https://www.communityjusticeexchange.org/nbfn-directory">National Bail Fund Network</a> —{" "}
                Available to assist with coordination
              </li>
              <li>
                <a href="https://secure.givelively.org/donate/the-bail-project">The Bail Project</a> — Centralized
                national organization with regular bail posting in a number of individual cities, which may be providing
                protest support depending on city and bail amounts
              </li>
            </ul>

            <h2 id="alabama">Alabama</h2>
            <h3 id="birmingham">Birmingham</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/bham-community-support-fund">BHAM Community Support Fund</a>
              </li>
              <li>
                <a href="https://venmo.com/starrobb">No One Left Behind Fund</a>
              </li>
            </ul>

            <h3 id="montgomery">Montgomery</h3>
            <ul>
              <li>
                <a href="https://www.mgmbailout.com/">Montgomery Bail Out Fund</a>
              </li>
            </ul>

            <h2 id="arizona">Arizona</h2>
            <h3 id="phoenix">Phoenix</h3>
            <ul>
              <li>
                <a href="https://secure.everyaction.com/lFZFGA1BpUa9kyYYgSxSKw2?fbclid=IwAR3YvwJy2ZFuGfVk0BL1rWX8UYOOx2Mbv8NVEV4MjlEXCSHDv-lx8l1H6IM">
                  Black People’s Justice Fund
                </a>
              </li>
            </ul>

            <h3 id="tucson">Tucson</h3>
            <ul>
              <li>
                <a href="https://watchtucson.com/">Tucson Second Chance Community Bail Fund</a>
              </li>
            </ul>

            <h2 id="california">California</h2>
            <h3 id="bay-area">Bay Area</h3>
            <ul>
              <li>
                <a href="http://www.antipoliceterrorproject.org/donate">Anti-Police Terror Project</a>
              </li>
              <li>
                <a href="https://rally.org/ARCbailfund">Bay Area Anti- Repression Committee Bail Fund</a>
              </li>
              <li>
                <a href="https://linktr.ee/PBO">Oakland’s People’s Breakfast</a>
              </li>
              <li>
                <a href="https://siliconvalleydsa.org/donations/">Silicon Valley DSA Bail Fund</a>
              </li>
            </ul>

            <h3 id="orange-county">Orange County</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/orange-county-bail-fund">Orange County Bail Fund</a>
              </li>
            </ul>

            <h3 id="los-angeles">Los Angeles</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/peoples-city-council-ticket-fund">
                  Peoples City Council Freedom Fund
                </a>
              </li>
            </ul>

            <h3 id="san-diego">San Diego</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/help-us-raise-funds-to-support-our-community">
                  San Diego Community Fund
                </a>
              </li>
            </ul>

            <h3 id="sacramento">Sacramento</h3>
            <ul>
              <li>
                <a href="https://actionnetwork.org/fundraising/ncrbailfund/">
                  NorCal Resist Activist BAIL &amp; ICE Bond Fund
                </a>
              </li>
            </ul>

            <h3 id="san-luis-obispo">San Luis Obispo</h3>
            <ul>
              <li>
                <a href="https://cash.app$SLOBailFund">SLO Bail Fund</a>
              </li>
            </ul>

            <h2 id="colorado">Colorado</h2>
            <ul>
              <li>
                <a href="https://fundly.com/coloradofreedom">Colorado Freedom Fund</a>
              </li>
            </ul>

            <h3 id="denver">Denver</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/funds-for-protesters-against-police-brutality">BLM Denver Fund</a>
              </li>
            </ul>

            <h2 id="connecticut">Connecticut</h2>
            <ul>
              <li>
                <a href="http://www.ctbailfund.org/">Connecticut Bail Fund</a>
              </li>
            </ul>

            <h2 id="delaware">Delaware</h2>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/fnbbailfundwilm">FNB Bail Fund</a>
              </li>
            </ul>

            <h2 id="florida">Florida</h2>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/f12-protesters-support?fbclid=IwAR0KGDvQg6S_L6vAVOlyxrl6GZQs-JMcrsKVeu7J92gg959ZWNplP18PtTQ">
                  IWOC Statewide Bail Fund
                </a>
              </li>
            </ul>

            <h3 id="alachua-county--tallahassee">Alachua County / Tallahassee</h3>
            <ul>
              <li>
                <a href="https://actionnetwork.org/fundraising/alachua-county-covid-19-bond-fund">
                  Alachua County Bond Fund
                </a>
              </li>
            </ul>

            <h3 id="duval-county">Duval County</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/duval-bail-out">Jacksonville Community Action Committee</a>
              </li>
            </ul>

            <h3 id="miami">Miami</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/freethemall">(F)empower Community Bond Fund</a>
              </li>
              <li>
                <a href="https://www.lgbtqfund.org/donate-1">Florida LGBTQ Freedom Fund</a>
              </li>
            </ul>

            <h3 id="orlando">Orlando</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/otownsquadd">Orlando Dream Defenders Bail Fund</a>
              </li>
            </ul>

            <h3 id="tampa-bay">Tampa Bay</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/tampa-bay-community-support-fund">
                  Tampa Bay Community Support Fund
                </a>
              </li>
            </ul>

            <h2 id="georgia">Georgia</h2>
            <h3 id="atlanta">Atlanta</h3>
            <ul>
              <li>
                <a href="http://atlsolidarity.org/">Atlanta Solidarity Fund</a>
              </li>
            </ul>

            <h3 id="athens">Athens</h3>
            <ul>
              <li>
                <a href="https://www.aadmovement.org/athens-freedom-fund/">Athens Freedom Fund</a>
              </li>
            </ul>

            <h2 id="hawaii">Hawai’i</h2>
            <ul>
              <li>
                <a href="https://hawaiicommunitybailfund.org/">Hawai’i Community Bail Fund</a>
              </li>
            </ul>

            <h2 id="illinois">Illinois</h2>

            <h3 id="champaign-county">Champaign County</h3>
            <ul>
              <li>
                <a href="https://champaigncountybailoutcoalition.wordpress.com/">Champaign County Bailout Coalition</a>
              </li>
            </ul>

            <h3 id="chicago">Chicago</h3>
            <ul>
              <li>
                <a href="https://chicagobond.org/">Chicago Community Bond Fund</a>
              </li>
            </ul>

            <h3 id="rockford">Rockford</h3>
            <ul>
              <li>
                <a href="https://www.wincoilbondproject.org/donate">Winnebago Bond Project</a>
              </li>
            </ul>

            <h2 id="indiana">Indiana</h2>
            <h3 id="indianapolis">Indianapolis</h3>
            <ul>
              <li>
                <a href="https://secure.givelively.org/donate/the-bail-project">The Bail Project</a> — This is a
                national project, but specifically helps people in Indianapolis
              </li>
            </ul>

            <h2 id="iowa">Iowa</h2>
            <h3 id="des-moines">Des Moines</h3>
            <ul>
              <li>
                <a href="https://communitybondproject.networkforgood.com/projects/101939-free-our-protesters">
                  Prarielands Freedom Fund
                </a>
              </li>
            </ul>

            <h2 id="kansas">Kansas</h2>
            <h3 id="lawrence">Lawrence</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/lawrencebailfund">BLM Lawrence Bail Fund</a>
              </li>
            </ul>

            <h2 id="kentucky">Kentucky</h2>
            <h3 id="louisville">Louisville</h3>
            <ul>
              <li>
                <a href="https://actionnetwork.org/fundraising/louisville-community-bail-fund-2">
                  Louisville Community Bail Fund
                </a>
              </li>
            </ul>

            <h3 id="lexington">Lexington</h3>
            <ul>
              <li>
                <a href="https://actionnetwork.org/fundraising/lexington-bail-fund?fbclid=IwAR3L2Ciw97_cBM5M1pAAy16O9PVYiJSIl-qSjohymGOm4qxVioJHrzAOyYM">
                  Lexington Bail Fund
                </a>
              </li>
            </ul>

            <h2 id="louisiana">Louisiana</h2>
            <h3 id="new-orleans">New Orleans</h3>
            <ul>
              <li>
                <a href="https://donorbox.org/safety-freedom-fund-eoy">New Orleans Safety &amp; Freedom Fund</a>
              </li>
            </ul>

            <h3 id="baton-rouge">Baton Rouge</h3>
            <ul>
              <li>
                <a href="https://www.ywca-br.org/community-bail-fund">YWCA Greater Baton Rouge Community Bail Fund</a>
              </li>
            </ul>

            <h2 id="maryland">Maryland</h2>
            <h3 id="baltimore">Baltimore</h3>
            <ul>
              <li>
                <a href="https://baltimoreactionlegal.networkforgood.com/projects/99878-cells-to-safety-campaign-final">
                  Baltimore Legal Action Team Bail Fund
                </a>
              </li>
            </ul>

            <h2 id="massachusetts">Massachusetts</h2>
            <ul>
              <li>
                <a href="https://www.massbailfund.org/">Massachusetts Bail Fund</a>
              </li>
            </ul>

            <h2 id="michigan">Michigan</h2>
            <ul>
              <li>
                <a href="https://michigansolidaritybailfund.com/">Michigan Solidarity Bail Fund</a>
              </li>
            </ul>

            <h3 id="detroit">Detroit</h3>
            <ul>
              <li>
                <a href="https://donorbox.org/support-the-detroit-justice-center-1">Detroit Justice Center</a>
              </li>
            </ul>

            <h2 id="minnesota">Minnesota</h2>
            <ul>
              <li>
                <a href="https://minnesotafreedomfund.org/">Minnesota Freedom Fund</a> — Due to an influx of donations,
                this Bail Fund has suggested to donate elsewhere
              </li>
            </ul>

            <h2 id="mississippi">Mississippi</h2>
            <ul>
              <li>
                <a href="https://secure.actblue.com/donate/ms-bail-fund">Mississippi Bail Collective</a>
              </li>
            </ul>

            <h2 id="missouri">Missouri</h2>
            <h3 id="kansas-city">Kansas City</h3>
            <ul>
              <li>
                <a href="https://www.paypal.com/pools/c/8dFiVVyGMN">#ICantBreath KC Solidarity Fund</a>
              </li>
              <li>
                <a href="https://www.kccommunitybailfund.com/">Kansas City Community Bail Fund</a>
              </li>
              <li>
                <a href="https://actionnetwork.org/fundraising/donate-to-the-one-struggle-kc-legal-fund">
                  One Struggle KC Legal Fund
                </a>
              </li>
            </ul>

            <h2 id="nebraska">Nebraska</h2>
            <h3 id="omaha-and-lincoln">Omaha and Lincoln</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/neleftcoalition">Neighbors for Common Good Bail Fund</a> — Put “Bail” on
                Memo Line
              </li>
            </ul>

            <h2 id="nevada">Nevada</h2>
            <h3 id="las-vegas">Las Vegas</h3>
            <ul>
              <li>
                <a href="https://secure.actblue.com/donate/vegasfreedomfund">Vegas Freedom Fund</a>
              </li>
            </ul>

            <h2 id="new-york">New York</h2>
            <h3 id="new-york-city">New York City</h3>
            <ul>
              <li>
                <a href="https://cash.app/$bailoutnycmay">Free Them All 2020</a> — This was the main protest support
                fund. As of Sunday evening, they have closed down donations and has suggested to donate elsewhere.
              </li>
              <li>
                <a href="https://brooklynbailfund.org/donation-form">Brooklyn Bail Fund</a> — Due to an influx of
                donations and an alternate protest support bail fund, this Bail Fund has suggested to donate elsewhere
              </li>
            </ul>

            <h3 id="albany">Albany</h3>
            <ul>
              <li>
                <a href="https://www.paypal.com/pools/c/8pAK2AzvDg">Albany Bail Fund For Black Lives</a>
              </li>
            </ul>

            <h3 id="buffalo">Buffalo</h3>
            <ul>
              <li>
                <a href="https://fundrazr.com/11fcAd?ref=ab_e8vImf_ab_8dfq3zLk9z18dfq3zLk9z1">SURJ Buffalo Bail Fund</a>
              </li>
            </ul>

            <h3 id="rochester">Rochester</h3>
            <ul>
              <li>
                <a href="https://venmo.com/blmroc">BLM Rochester</a>
              </li>
            </ul>

            <h2 id="north-carolina">North Carolina</h2>
            <ul>
              <li>
                <a href="https://emancipatenc.org/freedom-fighter-bond-fund/">Freedom Fighter Bail Bond</a> — Please
                click the checkbox under “Freedom Fighter Bond Fund Designation”
              </li>
            </ul>

            <h3 id="charlotte">Charlotte</h3>
            <ul>
              <li>
                <a href="https://cash.app/$WereStillHere">Charlotte Uprising</a>
              </li>
            </ul>

            <h3 id="durham">Durham</h3>
            <ul>
              <li>
                <a href="https://www.nccbailfund.org/">North Carolina Community Bail Fund of Durham</a>
              </li>
            </ul>

            <h3 id="raleigh--chapel-hill">Raleigh / Chapel Hill</h3>
            <ul>
              <li>
                <a href="https://www.takeactionch.com/donations">The Anti-Racist Activist Fund</a>
              </li>
            </ul>

            <h2 id="oklahoma">Oklahoma</h2>
            <h3 id="tulsa">Tulsa</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/BLMOKC">BLM Tulsa</a>
              </li>
            </ul>

            <h2 id="ohio">Ohio</h2>
            <h3 id="canton--akron">Canton / Akron</h3>
            <ul>
              <li>
                <a href="https://www.paypal.com/pools/c/8pz5hovrmY">Canton/Akron Bail Fund</a>
              </li>
            </ul>

            <h3 id="cleveland">Cleveland</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/blmcle">BLM Cleveland</a>
              </li>
            </ul>

            <h3 id="columbus">Columbus</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/columbusfreedomfund">Columbus Freedom Fund</a>
              </li>
            </ul>

            <h3 id="cincinnati">Cincinnati</h3>
            <ul>
              <li>
                <a href="https://www.givelify.com/givenow/1.0/NTU5MjE=/selection">Beloved Community Church Bail Fund</a>{" "}
                — Choose an amount and click Cincinnati Bail Fund on next screen
              </li>
            </ul>

            <h3 id="youngstown">Youngstown</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/youngstownfreedomfun">Youngstown Freedom Fund</a>
              </li>
            </ul>

            <h2 id="oregon">Oregon</h2>
            <h3 id="portland">Portland</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/pdx-protest-bail-fund">PDX Bail Fund</a>
              </li>
              <li>
                <a href="https://www.portlandfreedomfund.org/donate/">Portland Freedom Fund</a> — This Website is
                currently down, pending update
              </li>
            </ul>

            <h2 id="pennsylvania">Pennsylvania</h2>
            <h3 id="dauphin-county">Dauphin County</h3>
            <ul>
              <li>
                <a href="https://dauphincountybailfund.org/">Dauphin County Bail Fund</a>
              </li>
            </ul>

            <h3 id="lancaster">Lancaster</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/lancaster-bail-fund">Lancaster Bail Fund for #BlackLivesMatter</a>
              </li>
            </ul>

            <h3 id="philadelphia">Philadelphia</h3>
            <ul>
              <li>
                <a href="https://www.phillybailout.com/">Philadelphia Community Bail Fund</a>
              </li>
              <li>
                <a href="https://www.phillybailfund.org/">Philadelphia Bail Fund</a>
              </li>
            </ul>

            <h3 id="pittsburgh">Pittsburgh</h3>
            <ul>
              <li>
                <a href="https://www.bukitbailfund.org/donate">Bukit Bail Fund</a>
              </li>
            </ul>

            <h2 id="rhode-island">Rhode Island</h2>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/fangbailfund">FANG Community Bail Fund</a>
              </li>
            </ul>

            <h2 id="south-carolina">South Carolina</h2>
            <h3 id="columbia">Columbia</h3>
            <ul>
              <li>
                <a href="https://cash.app/$sodacitybail">Soda City Bail Fund</a>
              </li>
            </ul>

            <h3 id="charleston">Charleston</h3>
            <ul>
              <li>
                <a href="https://www.paypal.me/chsrebellion2020">BLM Charleston Bail Fund</a>
              </li>
            </ul>

            <h2 id="tennessee">Tennessee</h2>
            <h3 id="hamilton-county">Hamilton County</h3>
            <ul>
              <li>
                <a href="http://www.calebcha.org/bailfund.html">Hamilton County Community Bail Fund</a>
              </li>
            </ul>

            <h3 id="knoxville">Knoxville</h3>
            <ul>
              <li>
                <a href="https://venmo.com/EndMoneyBail-Knoxville">End Money Bail Knoxville Bail Fund</a> — Please
                caption “BLM”
              </li>
            </ul>

            <h3 id="memphis">Memphis</h3>
            <ul>
              <li>
                <a href="https://justcity.org/what-we-do/mcbfund/">Memphis Community Bail Fund</a>
              </li>
              <li>
                <a href="https://midsouthpeace.org/get-involved/donate-to-support-the-black-lives-matter-community-bail-fund/">
                  Mid-South Peace BLM Community Bail Fund
                </a>
              </li>
            </ul>

            <h3 id="nashville">Nashville</h3>
            <ul>
              <li>
                <a href="https://nashvillebailfund.org/">Nashville Community Bail Fund</a>
              </li>
            </ul>

            <h2 id="texas">Texas</h2>
            <h3 id="dallas">Dallas</h3>
            <ul>
              <li>
                <a href="https://faithintx.org/bailfund/">Luke 4:18 Bail Fund</a>
              </li>
            </ul>

            <h3 id="el-paso">El Paso</h3>
            <ul>
              <li>
                <a href="https://venmo.com/fianza-fund">Fianza Fund</a>
              </li>
            </ul>

            <h3 id="fort-worth">Fort Worth</h3>
            <ul>
              <li>
                <a href="https://actionnetwork.org/fundraising/tarrant-county-community-bail-fund">
                  Tarrant County Community Bail Fund
                </a>
              </li>
            </ul>

            <h3 id="harris-dallas-bexar-counties">Harris, Dallas, Bexar Counties</h3>
            <ul>
              <li>
                <a href="http://organizetexas.org/topcommunitybailoutfund/">Texas Organizing Project Bailout Fund</a>
              </li>
            </ul>

            <h2 id="utah">Utah</h2>
            <h3 id="salt-lake-city">Salt Lake City</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/c2mvvn-support-protesters-arrested-by-slcpd">
                  Salt Lake City Community Bail
                </a>
              </li>
            </ul>

            <h2 id="virginia">Virginia</h2>
            <h3 id="richmond">Richmond</h3>
            <ul>
              <li>
                <a href="https://rvabailfund.org/">Richmond Community Bail Fund</a>
              </li>
            </ul>

            <h3 id="roanoke">Roanoke</h3>
            <ul>
              <li>
                <a href="https://chuffed.org/project/rjs-bail-fund">Roanoke Community Bail Fund</a>
              </li>
            </ul>

            <h3 id="tidewater">Tidewater</h3>
            <ul>
              <li>
                <a href="https://tidewatersolidaritycenter.wordpress.com/donate/">Freedom Fighter Fund</a>
              </li>
            </ul>

            <h2 id="washington">Washington</h2>
            <ul>
              <li>
                <a href="https://www.nwcombailfund.org/">Northwest Community Bail Fund</a>
              </li>
            </ul>

            <h3 id="seattle">Seattle</h3>
            <ul>
              <li>
                <a href="https://blacklivesseattle.org/bail-fund/">BLM Seattle Freedom Fund</a>
              </li>
            </ul>

            <h2 id="west-virginia">West Virginia</h2>
            <ul>
              <li>
                <a href="https://secure.actblue.com/donate/blacklivesmatterwv?fbclid=IwAR0LhSbJi1j8_wT3nrzsH3J55Q-7JBg_AAoQ-7pOgnr9bj4UwcfWHAIUcTg">
                  BLM West Virginia Bail Fund
                </a>
              </li>
            </ul>

            <h2 id="washington-district-of-columbia">Washington, District of Columbia</h2>
            <ul>
              <li>Money bail is not used in Washington, DC</li>
            </ul>

            <h2 id="wisconsin">Wisconsin</h2>
            <h3 id="madison">Madison</h3>
            <ul>
              <li>
                <a href="https://freethe350bailfund.wordpress.com/">Free the 350 Bail Fund</a>
              </li>
            </ul>

            <h3 id="milwaukee">Milwaukee</h3>
            <ul>
              <li>
                <a href="https://fundrazr.com/mkefreedomfund">Milwaukee Freedom Fund</a>
              </li>
            </ul>

            <h2 id="canada">Canada</h2>
            <h3 id="toronto">Toronto</h3>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/toronto-protestor-bail-fund">Toronto Protestor Bail Fund</a>
              </li>
            </ul>

            <h3 id="montréal">Montréal</h3>
            <ul>
              <li>
                <a href="https://en.manif.co/">Standing Committee for the Support of Demonstrators</a>
              </li>
            </ul>

            <h2 id="other-resources">Other Resources</h2>
            <ul>
              <li>
                <a href="http://mutualaidhub.org">Mutual Aid Hub</a>
              </li>
              <li>
                <a href="https://www.participatorydefense.org/hubs">National Participatory Defense Network</a> — Network
                of community-based organizations that support individuals and families facing charges and navigating the
                criminal legal system
              </li>
            </ul>
          </div>
        </div>
        <div className="screen" id="btn-debug">
          <div className="wrapper-3d">
            <div className="fold fold-before"></div>
            <div className="fold fold-center"></div>
            <div className="fold fold-after"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
