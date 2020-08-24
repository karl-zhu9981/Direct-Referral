function GCScalculator(eyeOpening, vebalResponse, motorResponse) {
    return eyeOpening + vebalResponse + motorResponse;
}

function RTScalcultor(GSScore, BP, RR) {
    return (0.9368 * GSScore) + (0.7326 * BP) + (0.2908 * RR);
}

function ISSCalculator(head, face, thorax, abdomen, extermity, external) {
    if (head == 6 || face == 6 || thorax == 6 || abdomen == 6 || extermity == 6 || external == 6) {
        return 75;
    }

    var values = { head, face, thorax, abdomen, extermity, external };
    values.sort();
    return (values[0] ^ 2) + (values[1] ^ 2) + (values[2] ^ 2);
}

function TRISScalculator(age, RTSscore, ISSscore) {
    bBlunt =
}