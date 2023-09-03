import { config } from '../../config';


class CreaturesService {  //declaration class
    endpoint = "creatures";    //déclaration propriétés
    baseUrl = config.baseUrl;
    creaturesUrl = `${this.baseUrl}/${this.endpoint}`;

    async getAllCreatures() {
        const res = await fetch(this.creaturesUrl);
        if (!res.ok) throw new Error();
        const data = await res.json();
        return data.data;
    }

    async getCreatureByname(id) {
		const res = await fetch(`${this.creaturesUrl}/${id}`); //this représente la class CreaturesService
		if (!res.ok) throw new Error();
        const data = await res.json();
		return data.data;
	}
}



export default CreaturesService;