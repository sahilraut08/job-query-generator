document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateQuery');
    const queryText = document.getElementById('queryText');
    const copyBtn = document.getElementById('copyQuery');
    const searchBtn = document.getElementById('searchGoogle');
    const jobBoardActions = document.querySelector('.job-board-actions');
    
    // Form elements
    const jobTitle = document.getElementById('jobTitle');
    const location = document.getElementById('location');
    const company = document.getElementById('company');
    const timePosted = document.getElementById('timePosted');
    const experience = document.getElementById('experience');
    const salaryRange = document.getElementById('salaryRange');
    const workType = document.getElementById('workType');
    const keywords = document.getElementById('keywords');

    // Generate query button click handler
    generateBtn.addEventListener('click', function() {
        generateQuery();
    });

    // Copy query button click handler
    copyBtn.addEventListener('click', function() {
        copyToClipboard();
    });

    // Search Google button click handler
    searchBtn.addEventListener('click', function() {
        searchOnGoogle();
    });

    // Job board search buttons
    const searchLinkedInBtn = document.getElementById('searchLinkedIn');
    const searchIndeedBtn = document.getElementById('searchIndeed');
    const searchGlassdoorBtn = document.getElementById('searchGlassdoor');
    const searchAngelListBtn = document.getElementById('searchAngelList');
    const searchBuiltInBtn = document.getElementById('searchBuiltIn');
    const searchStackOverflowBtn = document.getElementById('searchStackOverflow');
    const searchHiredBtn = document.getElementById('searchHired');
    const searchTriplebyteBtn = document.getElementById('searchTriplebyte');
    const searchYCombinatorBtn = document.getElementById('searchYCombinator');
    const searchRemoteOKBtn = document.getElementById('searchRemoteOK');
    const searchWeWorkRemotelyBtn = document.getElementById('searchWeWorkRemotely');
    const searchDiceBtn = document.getElementById('searchDice');
    const searchGreenhouseBtn = document.getElementById('searchGreenhouse');
    const searchLeverBtn = document.getElementById('searchLever');
    const searchFlexJobsBtn = document.getElementById('searchFlexJobs');
    const searchWorkingNomadsBtn = document.getElementById('searchWorkingNomads');
    const searchWayUpBtn = document.getElementById('searchWayUp');
    const searchHandshakeBtn = document.getElementById('searchHandshake');
    const searchCollegeGradBtn = document.getElementById('searchCollegeGrad');
    const searchInternMatchBtn = document.getElementById('searchInternMatch');

    // Job board button click handlers
    searchLinkedInBtn.addEventListener('click', function() {
        searchOnLinkedIn();
    });

    searchIndeedBtn.addEventListener('click', function() {
        searchOnIndeed();
    });

    searchGlassdoorBtn.addEventListener('click', function() {
        searchOnGlassdoor();
    });

    searchAngelListBtn.addEventListener('click', function() {
        searchOnAngelList();
    });

    searchBuiltInBtn.addEventListener('click', function() {
        searchOnBuiltIn();
    });

    searchStackOverflowBtn.addEventListener('click', function() {
        searchOnStackOverflow();
    });

    searchHiredBtn.addEventListener('click', function() {
        searchOnHired();
    });

    searchTriplebyteBtn.addEventListener('click', function() {
        searchOnTriplebyte();
    });

    searchYCombinatorBtn.addEventListener('click', function() {
        searchOnYCombinator();
    });

    searchRemoteOKBtn.addEventListener('click', function() {
        searchOnRemoteOK();
    });

    searchWeWorkRemotelyBtn.addEventListener('click', function() {
        searchOnWeWorkRemotely();
    });

    searchDiceBtn.addEventListener('click', function() {
        searchOnDice();
    });

    searchGreenhouseBtn.addEventListener('click', function() {
        searchOnGreenhouse();
    });

    searchLeverBtn.addEventListener('click', function() {
        searchOnLever();
    });

    searchFlexJobsBtn.addEventListener('click', function() {
        searchOnFlexJobs();
    });

    searchWorkingNomadsBtn.addEventListener('click', function() {
        searchOnWorkingNomads();
    });

    searchWayUpBtn.addEventListener('click', function() {
        searchOnWayUp();
    });

    searchHandshakeBtn.addEventListener('click', function() {
        searchOnHandshake();
    });

    searchCollegeGradBtn.addEventListener('click', function() {
        searchOnCollegeGrad();
    });

    searchInternMatchBtn.addEventListener('click', function() {
        searchOnInternMatch();
    });

    // Template buttons
    const templateButtons = document.querySelectorAll('.template-btn');

    // Template button click handlers
    templateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const templateType = this.getAttribute('data-template');
            fillTemplate(templateType);
            
            // Update active state
            templateButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Template data
    const templates = {
        'software-engineer': {
            jobTitle: 'Software Engineer',
            location: 'San Francisco Bay Area',
            experience: 'new grad',
            salaryRange: '$80k-$120k',
            workType: 'hybrid',
            keywords: 'Python, JavaScript, React, AWS, Git'
        },
        'data-scientist': {
            jobTitle: 'Data Scientist',
            location: 'Remote',
            experience: 'entry level',
            salaryRange: '$70k-$100k',
            workType: 'remote',
            keywords: 'Python, SQL, Machine Learning, Statistics, Pandas'
        },
        'product-manager': {
            jobTitle: 'Product Manager',
            location: 'New York City',
            experience: 'new grad',
            salaryRange: '$80k-$110k',
            workType: 'hybrid',
            keywords: 'Product Strategy, User Research, Analytics, SQL'
        },
        'data-analyst': {
            jobTitle: 'Data Analyst',
            location: 'Austin, TX',
            experience: 'entry level',
            salaryRange: '$60k-$80k',
            workType: 'onsite',
            keywords: 'SQL, Excel, Tableau, Python, Statistics'
        },
        'frontend-developer': {
            jobTitle: 'Frontend Developer',
            location: 'Seattle, WA',
            experience: 'new grad',
            salaryRange: '$75k-$95k',
            workType: 'hybrid',
            keywords: 'JavaScript, React, HTML, CSS, TypeScript'
        },
        'machine-learning': {
            jobTitle: 'Machine Learning Engineer',
            location: 'Boston, MA',
            experience: 'entry level',
            salaryRange: '$85k-$110k',
            workType: 'onsite',
            keywords: 'Python, TensorFlow, PyTorch, ML, Deep Learning'
        }
    };

    function fillTemplate(templateType) {
        const template = templates[templateType];
        if (template) {
            jobTitle.value = template.jobTitle;
            location.value = template.location;
            experience.value = template.experience;
            salaryRange.value = template.salaryRange;
            workType.value = template.workType;
            keywords.value = template.keywords;
            
            // Clear company field
            company.value = '';
            
            // Set time posted to past week for fresh results
            timePosted.value = 'past week';
            
            // Generate query automatically
            setTimeout(() => {
                generateQuery();
            }, 300);
        }
    }

    // Enter key support for inputs
    [jobTitle, location, company, keywords].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateQuery();
            }
        });
    });

    function generateQuery() {
        // Show loading state
        generateBtn.classList.add('loading');
        generateBtn.innerHTML = '<i class="fas fa-spinner"></i> Generating...';

        // Simulate processing time for better UX
        setTimeout(() => {
            const query = buildQuery();
            displayQuery(query);
            
            // Reset button state
            generateBtn.classList.remove('loading');
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Query';
        }, 500);
    }

    function buildQuery() {
        let queryParts = [];
        
        // Job title (required)
        if (jobTitle.value.trim()) {
            queryParts.push(`"${jobTitle.value.trim()}"`);
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(`"${experience.value}"`);
        }
        
        // Location
        if (location.value.trim()) {
            queryParts.push(location.value.trim());
        }
        
        // Company (optional)
        if (company.value.trim()) {
            queryParts.push(`"${company.value.trim()}"`);
        }
        
        // Salary range
        if (salaryRange.value) {
            queryParts.push(salaryRange.value);
        }
        
        // Work type
        if (workType.value) {
            queryParts.push(workType.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        // Add job search specific terms
        queryParts.push('job');
        queryParts.push('careers');
        queryParts.push('hiring');
        
        // Add USA specific terms
        queryParts.push('USA');
        queryParts.push('United States');
        
        // Add new grad specific terms
        queryParts.push('"new graduate"');
        queryParts.push('"recent graduate"');
        queryParts.push('"entry level"');
        
        // Build the final query
        let query = queryParts.join(' ');
        
        // Add time filter if selected
        if (timePosted.value) {
            query += ` ${timePosted.value}`;
        }
        
        return query;
    }

    function buildLinkedInQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Location
        if (location.value.trim()) {
            queryParts.push(location.value.trim());
        }
        
        // Salary range
        if (salaryRange.value) {
            queryParts.push(salaryRange.value);
        }
        
        // Work type
        if (workType.value) {
            queryParts.push(workType.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildIndeedQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Location
        if (location.value.trim()) {
            queryParts.push(location.value.trim());
        }
        
        // Salary range
        if (salaryRange.value) {
            queryParts.push(salaryRange.value);
        }
        
        // Work type
        if (workType.value) {
            queryParts.push(workType.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function displayQuery(query) {
        queryText.textContent = query;
        queryText.classList.add('generated');
        
        // Show action buttons
        copyBtn.style.display = 'inline-flex';
        searchBtn.style.display = 'inline-flex';
        jobBoardActions.style.display = 'block';
        
        // Scroll to results if on mobile
        if (window.innerWidth <= 768) {
            queryText.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(queryText.textContent).then(() => {
            // Show success feedback
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.style.background = '#10b981';
            copyBtn.style.color = 'white';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            fallbackCopyTextToClipboard(queryText.textContent);
        });
    }

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.style.background = '#10b981';
            copyBtn.style.color = 'white';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Fallback copy failed: ', err);
        }
        
        document.body.removeChild(textArea);
    }

    function searchOnGoogle() {
        const query = encodeURIComponent(queryText.textContent);
        const googleSearchUrl = `https://www.google.com/search?q=${query}`;
        window.open(googleSearchUrl, '_blank');
    }

    function searchOnLinkedIn() {
        const query = encodeURIComponent(buildLinkedInQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        const linkedInUrl = `https://www.linkedin.com/jobs/search/?keywords=${query}&location=${location}&f_E=1&f_JT=F&position=1&pageNum=0`;
        window.open(linkedInUrl, '_blank');
    }

    function searchOnIndeed() {
        const query = encodeURIComponent(buildIndeedQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        const indeedUrl = `https://www.indeed.com/jobs?q=${query}&l=${location}&sc=0kf%3Aattr(EXPERIENCE)attr(ENTRY_LEVEL)%3B`;
        window.open(indeedUrl, '_blank');
    }

    function searchOnDice() {
        const query = encodeURIComponent(buildDiceQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        const diceUrl = `https://www.dice.com/jobs?q=${query}&location=${location}`;
        window.open(diceUrl, '_blank');
    }

    // Additional search functions for new job boards
    function searchOnGlassdoor() {
        const query = encodeURIComponent(buildGlassdoorQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        const glassdoorUrl = `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${query}&locT=N&locId=1&jobType=&fromAge=-1&minSalary=0&includeNoSalaryJobs=true&radius=100&cityId=-1&minRating=0.0&industryId=-1&sgocId=-1&seniorityType=all&companyId=-1&employerSizes=0&applicationType=0&remoteWorkType=0`;
        window.open(glassdoorUrl, '_blank');
    }

    function searchOnAngelList() {
        const query = encodeURIComponent(buildAngelListQuery());
        // AngelList jobs page
        const angelListUrl = `https://angel.co/jobs`;
        window.open(angelListUrl, '_blank');
    }

    function searchOnBuiltIn() {
        const query = encodeURIComponent(buildBuiltInQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // Built In jobs page
        const builtInUrl = `https://builtin.com/jobs`;
        window.open(builtInUrl, '_blank');
    }

    function searchOnStackOverflow() {
        const query = encodeURIComponent(buildStackOverflowQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // Stack Overflow jobs page
        const stackOverflowUrl = `https://stackoverflow.com/jobs`;
        window.open(stackOverflowUrl, '_blank');
    }

    function searchOnHired() {
        const query = encodeURIComponent(buildHiredQuery());
        // Hired main page
        const hiredUrl = `https://hired.com/`;
        window.open(hiredUrl, '_blank');
    }

    function searchOnTriplebyte() {
        const query = encodeURIComponent(buildTriplebyteQuery());
        // Triplebyte main page
        const triplebyteUrl = `https://triplebyte.com/`;
        window.open(triplebyteUrl, '_blank');
    }

    function searchOnYCombinator() {
        const query = encodeURIComponent(buildYCombinatorQuery());
        // Y Combinator jobs page
        const yCombinatorUrl = `https://www.ycombinator.com/jobs`;
        window.open(yCombinatorUrl, '_blank');
    }

    function searchOnRemoteOK() {
        const query = encodeURIComponent(buildRemoteOKQuery());
        const remoteOKUrl = `https://remoteok.io/remote-${query}-jobs`;
        window.open(remoteOKUrl, '_blank');
    }

    function searchOnWeWorkRemotely() {
        const query = encodeURIComponent(buildWeWorkRemotelyQuery());
        const weWorkRemotelyUrl = `https://weworkremotely.com/remote-jobs/search?term=${query}`;
        window.open(weWorkRemotelyUrl, '_blank');
    }

    // Additional search functions for new job boards
    function searchOnGreenhouse() {
        const query = encodeURIComponent(buildGreenhouseQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // Greenhouse doesn't have a direct search URL, redirect to main jobs page
        const greenhouseUrl = `https://boards.greenhouse.io/`;
        window.open(greenhouseUrl, '_blank');
    }

    function searchOnLever() {
        const query = encodeURIComponent(buildLeverQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // Lever doesn't have a direct search URL, redirect to main jobs page
        const leverUrl = `https://jobs.lever.co/`;
        window.open(leverUrl, '_blank');
    }

    function searchOnFlexJobs() {
        const query = encodeURIComponent(buildFlexJobsQuery());
        // FlexJobs search page
        const flexJobsUrl = `https://www.flexjobs.com/search?searchterm=${query}`;
        window.open(flexJobsUrl, '_blank');
    }

    function searchOnWorkingNomads() {
        const query = encodeURIComponent(buildWorkingNomadsQuery());
        // Working Nomads search page
        const workingNomadsUrl = `https://www.workingnomads.co/jobs?search=${query}`;
        window.open(workingNomadsUrl, '_blank');
    }

    function searchOnWayUp() {
        const query = encodeURIComponent(buildWayUpQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // WayUp search page
        const wayUpUrl = `https://www.wayup.com/search?q=${query}&location=${location}`;
        window.open(wayUpUrl, '_blank');
    }

    function searchOnHandshake() {
        const query = encodeURIComponent(buildHandshakeQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // Handshake main page (requires login)
        const handshakeUrl = `https://app.joinhandshake.com/`;
        window.open(handshakeUrl, '_blank');
    }

    function searchOnCollegeGrad() {
        const query = encodeURIComponent(buildCollegeGradQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // CollegeGrad search page
        const collegeGradUrl = `https://collegegrad.com/jobs?q=${query}&l=${location}`;
        window.open(collegeGradUrl, '_blank');
    }

    function searchOnInternMatch() {
        const query = encodeURIComponent(buildInternMatchQuery());
        const location = encodeURIComponent(document.getElementById('location').value.trim());
        // InternMatch main page
        const internMatchUrl = `https://www.internmatch.com/`;
        window.open(internMatchUrl, '_blank');
    }

    // Specialized query building functions for each platform
    function buildDiceQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildGlassdoorQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildAngelListQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildBuiltInQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildStackOverflowQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildHiredQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildTriplebyteQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildYCombinatorQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildRemoteOKQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildWeWorkRemotelyQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildGreenhouseQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildLeverQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildFlexJobsQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildWorkingNomadsQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildWayUpQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildHandshakeQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildCollegeGradQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    function buildInternMatchQuery() {
        let queryParts = [];
        
        // Job title
        if (jobTitle.value.trim()) {
            queryParts.push(jobTitle.value.trim());
        }
        
        // Experience level
        if (experience.value) {
            queryParts.push(experience.value);
        }
        
        // Keywords
        if (keywords.value.trim()) {
            const keywordArray = keywords.value.split(',').map(k => k.trim()).filter(k => k);
            keywordArray.forEach(keyword => {
                queryParts.push(keyword);
            });
        }
        
        return queryParts.join(' ');
    }

    // Auto-fill example data for demonstration
    function fillExampleData() {
        // Removed auto-fill functionality - inputs start empty
    }

    // Fill example data after a short delay
    setTimeout(fillExampleData, 1000);

    // Add some helpful tooltips and validation
    function addInputValidation() {
        jobTitle.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#e2e8f0';
            }
        });

        location.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#e2e8f0';
            }
        });
    }

    addInputValidation();
}); 