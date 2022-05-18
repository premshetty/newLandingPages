const sites = [
  "http://abdomenplasticsurgery.intpatient.com/",
  "http://abdominoplasty.intpatient.com/",
  "http://allelective.intpatient.com/",
  "http://angiography.intpatient.com/",
  "http://angioplasty.intpatient.com/",
  "http://anteriorligament.intpatient.com/",
  "http://antiageing.intpatient.com/",
  "http://antiagingstemcell.intpatient.com/",
  "http://antiagingweightloss.intpatient.com/",
  "http://aorticrepair.intpatient.com/",
  "http://aplasticanaemia.intpatient.com/",
  "http://ar-apollohospitals.intpatient.com",
  "http://ar-apollohyderabad.intpatient.com/",
  "http://ar-blkhospital.intpatient.com/",
  "http://ar-bonemarrowtransplant.intpatient.com/",
  "http://ar-breastcancer.intpatient.com/",
  "http://ar-cabginindia.intpatient.com/",
  "http://ar-cancerindia.intpatient.com/",
  "http://ar-cardiachospitals.intpatient.com/",
  "http://ar-cervicalcancer.intpatient.com/",
  "http://ar-cosmetichospitals.intpatient.com/",
  "http://ar-deepstimulation.intpatient.com/",
  "http://ar-dentalhospitals.intpatient.com/",
  "http://ar-eyehospitals.intpatient.com/",
  "http://ar-gicancer.intpatient.com/",
  "http://ar-globalhospital.intpatient.com/",
  "http://ar-hairtransplant.intpatient.com/",
  "http://ar-hcghospital.intpatient.com/",
  "http://ar-hearttransplant.intpatient.com/",
  "http://ar-hipreplacement.intpatient.com/",
  "http://ar-holeinheart.intpatient.com/",
  "http://ar-hospitalsindia.intpatient.com/",
  "http://ar-ivfhospitals.intpatient.com/",
  "http://ar-jaslokhospital.intpatient.com/",
  "http://ar-kidneytransplant.intpatient.com/",
  "http://ar-kneereplacement.intpatient.com/",
  "http://ar-livertransplant.intpatient.com/",
  "http://ar-lungtransplant.intpatient.com/",
  "http://ar-lungtransplant.intpatient.com/",
  "http://ar-maxhospital.intpatient.com/",
  "http://ar-neurologyhospitals.intpatient.com/",
  "http://ar-oncologyhospitals.intpatient.com/",
  "http://ar-orthopedichospital.intpatient.com/",
  "http://ar-pacemaker.intpatient.com/",
  "http://ar-prostatecancer.intpatient.com/",
  "http://ar-shoulderreplacement.intpatient.com/",
  "http://ar-stemcell.intpatient.com/",
  "http://ar-strokehospital.intpatient.com/",
  "http://ar-surgeryinindia.intpatient.com/",
  "http://ar-transplanthospitals.intpatient.com/",
  "http://artemishospital.intpatient.com/",
  "http://arthroscopicsurgery.intpatient.com/",
  "http://artificialdiscreplacement.intpatient.com/",
  "http://asianhearthospital.intpatient.com/",
  "http://astigmatismtreatment.intpatient.com/",
  "http://atrialfibrillation.intpatient.com/",
  "http://atrialseptaldefect.intpatient.com/",
  "http://atrioventriculardefect.intpatient.com/",
  "http://ayurveda.intpatient.com/",
  "http://balloonatrialseptostomy.intpatient.com/",
  "http://basalcellcancer.intpatient.com/",
  "http://biventricular.intpatient.com/",
  "http://bladdercancertreatment.intpatient.com/",
  "http://bladderincision.intpatient.com/",
  "http://bloodcancer.intpatient.com/",
  "http://bonemarrowtransplant.intpatient.com/",
  "http://brachialplexusinjury.intpatient.com/",
  "http://braintumor.intpatient.com/",
  "http://breastaugmentation.intpatient.com/",
  "http://breastcancer.intpatient.com/",
  "http://browliftsurgery.intpatient.com/",
  "http://browplastyforeheadlift.intpatient.com/",
  "http://bunionectomy.intpatient.com/",
  "http://cabginindia.intpatient.com/",
  "http://cancerindia.intpatient.com/",
  "http://carcinoidtumourstreatment.intpatient.com/",
  "http://cardiachospitals.intpatient.com/",
  "http://cardiologyfortis.intpatient.com/",
  "http://carehospital.intpatient.com/",
  "http://carotidarterystenosis.intpatient.com/",
  "http://carpaltunnel.intpatient.com/",
  "http://cerebralangiogram.intpatient.com/",
  "http://cerebralangioplasty.intpatient.com",
  "http://cervicalcancer.intpatient.com/",
  "http://cervicalfusion.intpatient.com/",
  "https://cheekaugmentation.intpatient.com/",
  "https://medanta.intpatient.com/",
  "https://apollodelhi.intpatient.com/",
  "https://cancerapollo.intpatient.com/",
  "https://fortisescortsdelhi.intpatient.com/",
  "https://new-landing-pages.vercel.app/",
  "https://hosplan.com/hospital/fortis-hospital-shalimar-bagh",
];
const checkStatusCode = () => {
  const writehere = document.getElementById("site-status");
  sites.forEach((site) => {
    axios
      .get(site)
      .then((response) => {
        if (response.status === 200) {
          writehere.innerHTML += `<a class="up" href=${site} style='color:white;'>${site}  is up</a>`;
        } else {
          writehere.innerHTML += `<a class="down" href=${site} style='color:white;'>${site}  is down</a>`;
        }
      })
      .catch((err) => {
        writehere.innerHTML += `<div class="down">
        <a  href=${site} style='color:white;'>${site}  is down</a>
        <details>
  <summary>more details</summary>
  <p>${err.message}</p>
</details`;
      });
  });
};
const sortbyUp = () => {};
const sortbyDown = () => {};
checkStatusCode();
