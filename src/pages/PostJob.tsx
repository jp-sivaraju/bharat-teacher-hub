
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Briefcase, ArrowLeft, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const PostJob = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const institutionType = searchParams.get('type') || 'school';
  
  const [formData, setFormData] = useState({
    jobTitle: '',
    subject: '',
    level: '',
    description: '',
    requirements: '',
    experience: '',
    salary: '',
    location: '',
    urgency: 'Medium',
    employmentType: 'Full-time'
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posting submitted:', { ...formData, skills });
    toast({
      title: "Job Posted Successfully!",
      description: "Your job opening has been posted and is now visible to teachers.",
    });
    setTimeout(() => {
      navigate(institutionType === 'college' ? '/college-dashboard' : '/school-dashboard');
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const backUrl = institutionType === 'college' ? '/college-dashboard' : '/school-dashboard';
  const institutionName = institutionType === 'college' ? 'College' : 'School';

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Post New Job Opening</h1>
              <p className="text-orange-100">Create a new teaching position for your {institutionName.toLowerCase()}</p>
            </div>
          </div>
          <Link to={backUrl}>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <Card className="border-2 border-orange-200 shadow-orange-lg">
          <CardHeader>
            <CardTitle className="text-orange-gradient">Job Details</CardTitle>
            <CardDescription className="text-orange-700">
              Fill out the details for your new teaching position
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-orange-800">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g., Mathematics Teacher"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-orange-800">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Mathematics, Physics, English"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level" className="text-orange-800">Level/Grade *</Label>
                  <Input
                    id="level"
                    placeholder={institutionType === 'college' ? 'e.g., JEE, NEET, Foundation' : 'e.g., Primary, Secondary, Senior Secondary'}
                    value={formData.level}
                    onChange={(e) => handleInputChange('level', e.target.value)}
                    className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-orange-800">Required Experience</Label>
                  <Select onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresher">Fresher</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary" className="text-orange-800">Salary Range</Label>
                  <Input
                    id="salary"
                    placeholder="e.g., ₹25,000 - ₹40,000"
                    value={formData.salary}
                    onChange={(e) => handleInputChange('salary', e.target.value)}
                    className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-orange-800">Location *</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Mumbai, Maharashtra"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency" className="text-orange-800">Urgency Level</Label>
                  <Select onValueChange={(value) => handleInputChange('urgency', value)} defaultValue="Medium">
                    <SelectTrigger className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employmentType" className="text-orange-800">Employment Type</Label>
                  <Select onValueChange={(value) => handleInputChange('employmentType', value)} defaultValue="Full-time">
                    <SelectTrigger className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Substitute">Substitute</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-orange-800">Job Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500 min-h-32"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-orange-800">Requirements & Qualifications</Label>
                <Textarea
                  id="requirements"
                  placeholder="List the educational qualifications, certifications, and other requirements..."
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500 min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-orange-800">Required Skills</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    className="border-2 border-orange-200 hover:border-orange-400 focus:border-orange-500"
                  />
                  <Button
                    type="button"
                    onClick={addSkill}
                    className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                {skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800">
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:text-orange-900"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex space-x-4 pt-6">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-orange"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Post Job Opening
                </Button>
                <Link to={backUrl} className="flex-1">
                  <Button type="button" variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-50">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
