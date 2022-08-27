class TeamMember{
    name;
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thanks for your feedback`);
    }
}


class Instructor extends TeamMember{
    
    designation = 'Web Course Instructor'
    team = 'web team'
    
    constructor(name, location, tech){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please creatre quiz for module ${module}`);
    }
}



class Developer{
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location, tech){
        this.name = name;
        this.location = location;
        this.tech = tech;
    }
    developerFeature(feature){
        console.log(`Please develop the feature ${feature}`);
    }
    release(version){
        console.log(`please release the module quiz ${version}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}