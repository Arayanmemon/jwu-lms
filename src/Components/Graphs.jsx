import React from 'react'

export default function Graphs() {
    myChart();
    return (
        <div className='w-full'>
            <div class="flex items-center justify-center bg-gray-50 p-4">
    <div class="flex flex-col max-w-7xl w-full md:w-[70%]">

        {/* Upper section */}
        <div class="flex flex-col lg:flex-row">
            {/* Stat1 */}
            <div class="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/3 justify-center py-4 px-8 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Total Students</div>
                        <div class="class flex items-center">
                            <div class="text-3xl font-bold text-gray-700">4769</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat2 */}
            <div class="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/3 justify-center py-4 px-8 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Total Employes</div>
                        <div class="class flex items-center">
                            <div class="text-3xl font-bold text-gray-700">174</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat3 */}
            <div class="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/3 justify-center py-4 px-8 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Programs</div>
                        <div class="class flex items-center">
                            <div class="text-3xl font-bold text-gray-700">10</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat4 */}
            <div class="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/3 justify-center py-4 px-8 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Deaprtments</div>
                        <div class="class flex items-center">
                            <div class="text-3xl font-bold text-gray-700">15</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        {/* Middle Section */}
        <div class="flex flex-col lg:flex-row">
            <div class="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Program Wise Students</div>
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[20%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Mon</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[60%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Tue</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[70%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Wed</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[44%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Thu</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[87%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Fri</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[55%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Sat</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[34%] w-6 rounded-tr rounded-tl bg-green-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Sun</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Department Wise Faculty</div>
                        
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[79%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Mon</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[20%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Tue</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[30%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Wed</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[44%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Thu</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[67%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Fri</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[25%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Sat</div>
                            </div>
                            <div class="flex-col">
                                <div class="h-16 w-6 rounded-tr rounded-tl bg-gray-100 mx-2"><div class="h-[64%] w-6 rounded-tr rounded-tl bg-violet-300"></div></div>
                                <div class="text-xs font-medium ml-2 text-gray-500">Sun</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col lg:flex-row'> 
        <div class="bg-white shadow-lg rounded-xl flex items-start max-w-1/2 w-[90%] lg:w-1/2 justify-center py-4 px-4 mx-4 my-2">
                <div class="flex items-center justify-start w-full">
                    <div class="flex-col w-[85%]">
                        <div class="text-sm font-medium text-violet-600 my-2">Department Wise Students</div>
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <canvas id='myChart'></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.tailwindcss.com"></script>

        </div>
    )
}


