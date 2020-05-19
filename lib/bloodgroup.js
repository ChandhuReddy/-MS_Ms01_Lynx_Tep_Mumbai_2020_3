//Blood group function
function BloodGroup (faker) {
	    this.group = function(){
		            return faker.random.arrayElement(faker.definitions.bloodgroup.bloodgroup);
		        }

}

module['exports'] = BloodGroup;
