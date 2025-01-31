import ApiEndpoints from "./ApiEndpoints";

class ApiManager {
    private static BASE_URL = process.env.DOCKAPI_URL;
    
    public static async deployProject(projectData: ProjectData) {
        console.log("Deploying project...", projectData, `${this.BASE_URL}${ApiEndpoints.UPLOAD_PROJECT}`);
        return await ApiMethods.POST(`${this.BASE_URL}${ApiEndpoints.UPLOAD_PROJECT}`, projectData);
    }
}

export default ApiManager;