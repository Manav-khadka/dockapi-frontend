import ApiEndpoints from "./ApiEndpoints";

class ApiManager {
    private static BASE_URL = process.env.DOCKAPI_URL as string;
    
    public static async deployProject(projectData: ProjectData) {
        return await ApiMethods.POST(`${this.BASE_URL}${ApiEndpoints.DEPLOY_PROJECT}`, projectData);
    }
}