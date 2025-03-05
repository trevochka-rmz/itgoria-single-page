import React from 'react';

function Courses() {
    const courses = [
        { title: 'Frontend Development', description: 'React, Vue, Angular' },
        {
            title: 'Backend Development',
            description: 'Node.js, Express, MongoDB',
        },
        { title: 'Fullstack', description: 'Frontend + Backend' },
    ];

    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Наши Курсы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="p-4 border rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold">
                            {course.title}
                        </h3>
                        <p className="mt-2">{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Courses;
