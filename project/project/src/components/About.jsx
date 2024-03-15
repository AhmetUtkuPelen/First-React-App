import AboutPicture from '../assets/banneryeni.jpg'
import '../styles/about.css'


function About() {
  return (
<div className="about">
    <div className="aboutTop" style={{backgroundImage:`url(${AboutPicture})`}}>
    </div>
    <div className='aboutBottom'>
      <h1>Hakkımızda</h1>
      <p style={{fontSize:'20px'}}>The honey badger (Mellivora capensis), also known as the ratel (/ˈrɑːtəl/ or /ˈreɪtəl/), is a mammal widely distributed in Africa, Southwest Asia, and the Indian subcontinent. Because of its wide range and occurrence in a variety of habitats, it is listed as Least Concern on the IUCN Red List.

It is the only living species in the genus Mellivora and in the mustelid subfamily Mellivorinae. Despite its name, the honey badger does not closely resemble other badger species; instead, it bears more anatomical similarities to weasels. It is primarily a carnivorous species and has few natural predators because of its thick skin, strength and ferocious defensive abilities.Viverra capensis was the scientific name used by Johann Christian Daniel von Schreber in 1777 who described a honey badger skin from the Cape of Good Hope.[2] Mellivorae was proposed as name for the genus by Gottlieb Conrad Christian Storr in 1780.[3] Mellivorina was proposed as a tribe name by John Edward Gray in 1865.[4]

The honey badger is the only species of the genus Mellivora. Although in the 1860s it was assigned to the badger subfamily, the Melinae, it is now generally agreed that it bears few similarities to the Melinae. It is much more closely related to the marten subfamily, Guloninae, and furthermore is assigned its own subfamily, Mellivorinae.[5] Differences between Mellivorinae and Guloninae include differences in their dentition formulae. Though not in the same subfamily as the wolverines, which are a genus of large-sized and atypical Guloninae, the honey badger can be regarded as another, analogous, form of outsized weasel or polecat.The species first appeared during the middle Pliocene in Asia.[6] A number of extinct relatives are known dating back at least 7 million years to the Late Miocene. These include Mellivora benfieldi from South Africa and Italy, Promellivora from Pakistan, and Howellictis from Chad. More distant relatives include Eomellivora, which evolved into several different species in both the Old and New World, and the giant, long-legged Ekorus from Kenya.[7]In the 19th and 20th centuries, 16 zoological specimens of the honey badger were described and proposed as subspecies.[8] As of 2005, 12 subspecies are recognised as valid taxa.[9] Points taken into consideration in assigning different subspecies include size and the extent of whiteness or greyness on the back.[10]</p>
    </div>
</div>
  )
}

export default About