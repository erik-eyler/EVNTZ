import api from "./apiConfig";

export const getEvents = async () => {
  try {
    const response = await api.get("/events");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEvent = async (id) => {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (event) => {
  try {
    const response = await api.post("/events", event);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (id, event) => {
  try {
    const response = await api.put(`/events/${id}`, event);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
