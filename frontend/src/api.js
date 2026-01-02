const API_URL = 'http://localhost:8000';

export const analyzeFiles = async (files) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }

    const response = await fetch(`${API_URL}/analyze`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Analysis failed');
    }

    return response.json();
};
