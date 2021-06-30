import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ----- Material UI -----
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

function PatientCardiac({ patientsMirror, setPatientsMirror }) {

    const dropdowns = useSelector((store) => store.dropdowns);
    const { id } = useParams();

    useEffect(() => {
        console.log("UPDATING patients browser storage", patientsMirror);
        localStorage.setItem("patients", JSON.stringify(patientsMirror));
    }, [patientsMirror]);

    function submitValue(newParameter) {
        console.log(
            "Updating parameter in submitValue",
            newParameter.key,
            newParameter.thing
        );

        setPatientsMirror({
            ...localIncident,
            [newParameter.key]: newParameter.thing,
        });
    }






    return (
        <div className="container">
            <h2>Patient Cardiac Arrest Form:</h2>
            <br /><br />

            {dropdowns.go && patientsMirror &&
                <div>
                    <InputLabel
                        id="demo-simple-select-autowidth-label">Cardiac Arrest?</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}cardiacArrest`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}cardiacArrest`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['cardiac_arrest'].map(item => <MenuItem key={'cardiac_arrest' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                        {/* <MenuItem value={10}>Option 1</MenuItem> */}

                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Cardiac Arrest Etiology</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}cardiacArrestEtiology`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}cardiacArrestEtiology`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['cardiac_arrest_etiology'].map(item => <MenuItem key={'cardiac_arrest_etiology' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Resuscitation Attempted by EMS</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}resuscitationAttempt`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}resuscitationAttempt`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['resuscitation_attempt'].map(item => <MenuItem key={'resuscitation_attempt' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Arrest Witnessed By</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}cardiacArrestWitness`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}cardiacArrestWitness`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['cardiac_arrest_witness'].map(item => <MenuItem key={'cardiac_arrest_witness' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">AED Use Prior to EMS Arrival?</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}aedUsePrior`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}aedUsePrior`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['aed_use_prior'].map(item => <MenuItem key={'aed_use_prior' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Type of CPR Provided</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}cprProvided`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}cprProvided`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['cpr_type'].map(item => <MenuItem key={'cpr_type' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Any Return of Spontaneous Circulation</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}spontaneousCirculation`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}spontaneousCirculation`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['spontaneous_circulation'].map(item => <MenuItem key={'spontaneous_circulation' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <p>Cardiac Arrest calendar goes here</p> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Reason for Stopping CPR/Resuscitation</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}cprStopped`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}cprStopped`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['cpr_stopped'].map(item => <MenuItem key={'cpr_stopped' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Who First Initiated CPR</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}cprInitiator`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}cprInitiator`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['cpr_initiator'].map(item => <MenuItem key={'cpr_initiator' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Who First Applied AED</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}aedApplicator`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}aedApplicator`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['aed_applicator'].map(item => <MenuItem key={'aed_applicator' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />

                    <InputLabel
                        id="demo-simple-select-autowidth-label">Who First Defibrillated the Patient</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        autoWidth
                        value={patientsMirror[`${id}aedDefibrillator`]}
                        onChange={(event) =>
                            submitValue({
                                key: `${id}aedDefibrillator`,
                                thing: event.target.value,
                            })
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dropdowns['aed_defibrillator'].map(item => <MenuItem key={'aed_defibrillator' + item.id}
                            value={item.id}>{item.type}</MenuItem>)}
                    </Select> <br /><br />
                </div>
            }
        </div>
    )
}

export default PatientCardiac;