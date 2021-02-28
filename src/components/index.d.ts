declare module "file-extension-js";

/**
 * Get Material icon for a folder
 * @param folderName name of folder to find icon for
 * @param open open folder or not
 * @return icon source
 */
export declare function getMaterialFolderIcon(folderName: string, open?: boolean): string;
/**
 * Get icon for a file
 * @param fileName name of file to find icon for
 * @return icon source
 */
export declare function getMaterialFileIcon(fileName: string): string;
/**
 * Get Material icon for a folder
 * @param folderName name of folder to find icon for
 * @param open open folder or not
 * @return icon source
 */
export declare function getVSIFolderIcon(folderName: string, open?: boolean): string;
/**
 * Get icon for a file
 * @param fileName name of file to find icon for
 * @return icon source
 */
export declare function getVSIFileIcon(fileName: string): string;
