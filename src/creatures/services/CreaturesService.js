import { config } from '../../config';


class CreaturesService {
    endpoint = "creatures";
    baseUrl = config.baseUrl;
    creaturesUrl = `${this.baseUrl}/${this.endpoint}`;

    async getAllCreatures() {
        const res = await fetch(this.creaturesUrl)
        if (!res.ok) throw new Error();
        const data = await res.json();
        return data.data;
    }

    async getCreaturesById(id) {
		const res = await fetch(`${this.creaturesUrl}/${id}`)
		if (!res.ok) throw new Error();
		return await res.json();
	}
}



export default CreaturesService;