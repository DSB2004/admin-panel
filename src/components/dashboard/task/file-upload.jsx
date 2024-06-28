import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '../../../layouts/form/button';
import { IoAddOutline } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";

const FileUpload = () => {
    const [file, setFile] = useState();

    const [alertMsg, update_msg] = useState();
    const onDrop = useCallback((acceptedFiles) => {
        update_msg("");
        const selectedFile = acceptedFiles[0];
        const allowedExtensions = ['docx', 'pdf', 'jpg', 'jpeg', 'png', 'webp'];
        const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            update_msg('File type not allowed.');
            return;
        }
        setFile(selectedFile);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,  // Limit to one file
    });

    const handleUpload = () => {
        // Implement your upload logic here
        if (file) {
            console.log('Uploading file:', file);
        } else {
            update_msg('No file selected.');
        }
    };

    return (
        <section className='content'>
            <div className='content-fluid'>
                <div className='file-upload-wrapper'>
                    <div className='file-upload'>
                        <div {...getRootProps()} className='dropzone'>
                            {
                                file ? <>

                                    <FaFile className='file-icon ' />
                                    <p>
                                        {file.name}
                                    </p>
                                </> : <>

                                    <input {...getInputProps()} />
                                    < IoAddOutline className='add-icon' />
                                    <p>Drag 'n' drop a file here </p>
                                    <p>OR</p>
                                    <p>click to select a file</p>
                                </>
                            }
                        </div>
                        <Button onClick={handleUpload}
                            disabled={file} className="margin-5-0" text="Upload File" />
                        <p className='alert-message margin-20'> {alertMsg} </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FileUpload;
