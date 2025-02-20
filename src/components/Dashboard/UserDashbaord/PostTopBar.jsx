import React from 'react'
import { MdVerified } from 'react-icons/md'

const PostTopBar = () => {
    return (
        <>
            <div className="postTopBar d-flex align-items-center justify-content-between mb-md-2">
                <div className="postTopBarLeft d-flex gap-3 align-items-center">
                    <div className="userName fw-bold d-flex align-items-center gap-1">
                        Da Investopedia <MdVerified className='text-primary fs-5' />
                    </div>
                    <div className="postTime text-lead fs14 ">
                        2 hours
                    </div>
                </div>


            </div>
        </>
    )
}

export default PostTopBar