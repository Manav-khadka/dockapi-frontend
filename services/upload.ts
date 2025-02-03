import {api} from "./axios";
export const uploadProject = async (project:ProjectData) => {
    try {
        // Upload project
        const response = await api.post("/upload-project", project);
        return response;
    }
    catch (error) {
        throw error;
    }
}