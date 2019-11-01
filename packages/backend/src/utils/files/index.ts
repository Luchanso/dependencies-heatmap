export const TEMP_DIRECTORY = process.env.TEMP_DIRECTORY || "./temp";

/**
 * Return temp directory for projects
 * @param name directory name
 */
export const getTempDirectory = (name: string) => `${TEMP_DIRECTORY}/${name}`;
