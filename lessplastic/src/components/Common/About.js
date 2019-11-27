import React, { Component } from 'react';
import {Image} from "react-bootstrap";
import banner from "../../Images/25790964_320798625105943_7213181808521169955_o.jpg"
import surfRider from "../../Images/49592460_2003602713057154_2956073840620339200_n.jpg"
import greenStrandja from "../../Images/49637467_298442007445975_5837523504940974080_n.jpg"
import burgasRecycle from "../../Images/49736917_367680380716396_5714439513288212480_n.jpg"
import viaPontica from "../../Images/49831851_741929749497532_8678543168930578432_n.jpg"
import forEarth from "../../Images/49864307_228277894764783_2888689604792156160_n.jpg"
import foodNotBombs from "../../Images/49864441_611918279251342_1165191676415705088_n.jpg"
import greenPeace from "../../Images/50023892_1966444236994449_178188589564166144_n.jpg"
import akasha from "../../Images/akasha logo.png"
import wind2wind from "../../Images/wind2logo.png"
import forest from "../../Images/49736896_598892740564691_6642282599618183168_n.jpg"

export class About extends Component {

    render() {
        return (
            <div>
                <div className="text-center mt-2">
                    <h3 className="font-weight-bold font-italic">More Planet Less Plastic!</h3>
                </div>
                <div className="text-center">
                    <Image src={banner} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                </div>
                <hr/>
                <div style={{margin: '1rem', textAlign: 'center', paddingLeft: '10px', paddingRight: '10px'}}>
                    <h5>
                        Lessplastic Bulgaria website offers educational information for all groups of people.
                        You will find articles, news, polls, events and videos about plastic pollution and all kinds
                        of information about plastic. We strive to inspire people in Bulgaria to limit their
                        plastic waste when we emphasize how dangerous they are.
                    </h5>
                </div>
                <hr/>
                <div className="text-center mb-3">
                    <h4>Our Partners</h4>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://surfriderbg.org/">
                            <Image src={surfRider} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://gorichka.bg/">
                            <Image src={forest} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.burgasrecycle.com/">
                            <Image src={burgasRecycle} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://viapontica.org/bg/">
                            <Image src={viaPontica} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.zazemiata.org/v1/">
                            <Image src={forEarth} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FoodNotBombsSofia/">
                            <Image src={foodNotBombs} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.greenpeace.org/bulgaria/bg/">
                            <Image src={greenPeace} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://akashasurf.com/">
                            <Image src={akasha} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://wind2win.com/">
                            <Image src={wind2wind} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                    <div className="col-md-2 mb-2 mt-2">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.zelenastrandja.com">
                            <Image src={greenStrandja} thumbnail style={{width: '100%', maxHeight: '300px', maxWidth: '500px', height: 'auto'}}/>
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="text-center">
                    <text>For more information contact us.</text>
                </div>
                <div className="text-center mb-3">
                    <b>Lessplastic Bulgaria.</b>
                </div>
            </div>
        )
    }
}
