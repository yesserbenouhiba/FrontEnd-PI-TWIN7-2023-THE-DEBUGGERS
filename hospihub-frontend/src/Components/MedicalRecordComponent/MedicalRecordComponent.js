import SideNavBarComponent from "./SideNavBarComponent";
import UpdateMedicalRecordComponent from "./UpdateMedRec";
import BloodComponent from "./BloodComponent";
import VitalSignsComponent from "./VitalSignsComponent";
function MedicalRecordComponent() {
    return (
        <>
            
            <div className="container-xl px-4 mt-4">
                <hr className="mt-0 mb-4" />
                <div className="row">
                    <div className="col-xl-4">
                        {/*sidenavbar */}
                        <SideNavBarComponent></SideNavBarComponent>
                    </div>
                    <div className="col-xl-8">
                     {/* <UpdateMedicalRecordComponent></UpdateMedicalRecordComponent>  */}
                 {/* <BloodComponent></BloodComponent> */}
                 <VitalSignsComponent></VitalSignsComponent>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MedicalRecordComponent;