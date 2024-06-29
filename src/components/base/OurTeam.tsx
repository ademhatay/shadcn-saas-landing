/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

interface TeamMember {
    name: string;
    position: string;
    image: string;
    email: string;
    phone: string;
}

const OurTeam = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=3");
                const data = await response.json();

                const members = data.results.map((user: any) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    position: "Team Member", // or any specific position you want to assign
                    image: user.picture.large,
                    email: user.email,
                    phone: user.phone,
                }));

                setTeamMembers(members);
            } catch (error) {
                console.error("Error fetching team members:", error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <section className="py-16" id="team">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                    Our Team
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Meet the people who make it all happen.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                className="w-32 h-32 mx-auto rounded-full"
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                {member.name}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {member.position}
                            </p>
                            <div className="mt-4 flex flex-col justify-center items-center space-y-2">
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <Mail className="w-5 h-5 mr-2" />
                                    {member.email}
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <Phone className="w-5 h-5 mr-2" />
                                    {member.phone}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;