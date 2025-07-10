import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SchoolDashboard = () => {
  const navigate = useNavigate();

  const schoolData = {
    name: 'Sunrise International School',
    established: '1995',
    board: 'CBSE',
    address: '123 Education Street, Andheri West, Mumbai, Maharashtra, India 400058',
    contact: '+91 98765 43210',
    email: 'info@sunriseinternationalschool.edu.in',
    website: 'sunriseinternationalschool.edu.in',
    principal: 'Dr. Meera Sharma',
    totalTeachers: 25,
    openPositions: 8,
    totalStudents: 450,
    studentTeacherRatio: '18:1',
    achievements: ['Best Academic Performance 2023', 'Excellence in Sports', 'Environment-Friendly School Award'],
    facilities: ['Smart Classrooms', 'Science Laboratories', 'Computer Laboratory', 'Auditorium', 'Library', 'Sports Complex']
  };

  const recentApplications = [
    { id: '1', title: 'Mathematics Teacher', status: 'Pending', applicants: 12, urgency: 'High', salaryRange: '₹35,000 - ₹45,000' },
    { id: '2', title: 'Physics Teacher', status: 'Reviewed', applicants: 8, urgency: 'Medium', salaryRange: '₹40,000 - ₹50,000' },
    { id: '3', title: 'Chemistry Teacher', status: 'Pending', applicants: 5, urgency: 'Low', salaryRange: '₹30,000 - ₹40,000' }
  ];

  const handlePostJob = () => {
    navigate('/post-job');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-orange-500 text-white p-4 rounded-t-lg flex justify-between items-center mb-6 shadow-lg border-2 border-orange-800">
          <div>
            <h1 className="text-2xl font-bold">{schoolData.name}</h1>
            <p className="text-sm text-orange-100">Established {schoolData.established} • {schoolData.board}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-orange-700">
              Edit Profile
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-orange-700">
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* School Overview */}
        <Card className="border-2 border-orange-200 shadow-md mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-orange-800">School Overview</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Principal:</strong> {schoolData.principal}</div>
            <div><strong>Address:</strong> {schoolData.address}</div>
            <div><strong>Contact:</strong> {schoolData.contact}</div>
            <div><strong>Email:</strong> {schoolData.email}</div>
            <div><strong>Website:</strong> <a href={`https://${schoolData.website}`} className="text-orange-600 hover:underline">{schoolData.website}</a></div>
            <div><strong>Total Teachers:</strong> {schoolData.totalTeachers}</div>
            <div><strong>Open Positions:</strong> {schoolData.openPositions}</div>
            <div><strong>Total Students:</strong> {schoolData.totalStudents}</div>
            <div><strong>Student-Teacher Ratio:</strong> {schoolData.studentTeacherRatio}</div>
            <div><strong>Achievements:</strong> {schoolData.achievements.join(', ')}</div>
            <div><strong>Facilities:</strong> {schoolData.facilities.join(', ')}</div>
          </CardContent>
        </Card>

        {/* Job Openings and Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Open Positions */}
          <Card className="border-2 border-orange-200 shadow-md">
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold text-orange-800">Open Positions</CardTitle>
              <Button onClick={handlePostJob} className="bg-orange-600 hover:bg-orange-700 text-white">
                Post Job Opening
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {schoolData.openPositions > 0 ? (
                  recentApplications.map((job) => (
                    <li key={job.id} className="p-3 bg-orange-50 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <p className="font-medium text-orange-800">{job.title}</p>
                        <p className="text-sm text-gray-600">Applicants: {job.applicants} | Salary: {job.salaryRange}</p>
                      </div>
                      <div className="mt-2 sm:mt-0 flex space-x-2">
                        <Badge variant={job.status === 'Reviewed' ? 'default' : 'secondary'}>{job.status}</Badge>
                        <Badge variant="outline" className="text-orange-600 border-orange-300">{job.urgency}</Badge>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-600">No open positions currently.</p>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="border-2 border-orange-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-orange-800">Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentApplications.map((job) => (
                  <li key={job.id} className="p-3 bg-orange-50 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <p className="font-medium text-orange-800">{job.title}</p>
                      <p className="text-sm text-gray-600">Urgency: {job.urgency} | Applicants: {job.applicants}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge variant={job.status === 'Reviewed' ? 'default' : 'secondary'}>{job.status}</Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;