import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '../../../layouts/form/button';
import { IoAddOutline } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";
import TEST_API from '../../../api/test.api';


const FileUpload = () => {
    const [file, setFile] = useState();

    const [alertMsg, update_msg] = useState();
    const onDrop = useCallback((acceptedFiles) => {
        update_msg("");
        const selectedFile = acceptedFiles[0];
        const allowedExtensions = ['docx', 'pdf', 'jpg', 'jpeg', 'png', "txt", 'webp'];
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

    const handleUpload = async () => {
        try {
            if (file) {
                update_msg(<RiLoader2Fill className='loader' />)
                const response = await TEST_API.post("/upload", file, {
                    headers: {
                        "Content-Type": file.type,
                        "filename": file.name
                    }
                })
                if (response.data.body.resType === 'success') {
                    update_msg("File Uploaded Successfully");
                    setFile();
                }
                else {
                    update_msg("Error While Uploading File");
                    setFile();
                }
            } else {
                update_msg('No file selected.');
            }
        }
        catch (err) {
            console.log(err)
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
