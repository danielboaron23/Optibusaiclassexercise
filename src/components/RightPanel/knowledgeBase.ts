/**
 * AI Assistant Knowledge Base
 * Comprehensive knowledge for workforce planning and scheduling
 */

export interface KnowledgeEntry {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  relatedTopics?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Categories for organizing knowledge
export const CATEGORIES: Category[] = [
  { id: 'getting-started', name: 'Getting Started', description: 'Basic concepts and navigation', icon: 'info' },
  { id: 'drivers', name: 'Driver Management', description: 'Managing drivers and assignments', icon: 'user' },
  { id: 'shifts', name: 'Shifts & Schedules', description: 'Working with shifts and schedules', icon: 'calendar' },
  { id: 'optimization', name: 'Optimization', description: 'Automatic schedule optimization', icon: 'bolt' },
  { id: 'reports', name: 'Reports & Export', description: 'Generating and exporting data', icon: 'download' },
  { id: 'deadheads', name: 'Deadhead Management', description: 'Managing deadhead catalogs', icon: 'bus' },
  { id: 'rules', name: 'Rules & Constraints', description: 'Scheduling rules and labor laws', icon: 'shield' },
  { id: 'troubleshooting', name: 'Troubleshooting', description: 'Common issues and solutions', icon: 'help' },
];

// Comprehensive knowledge base entries
export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // ===== GETTING STARTED =====
  {
    id: 'gs-1',
    category: 'getting-started',
    keywords: ['start', 'begin', 'new', 'how to', 'introduction', 'basics', 'overview', 'what is'],
    question: 'What is the Workforce Planner?',
    answer: `The Workforce Planner is a comprehensive scheduling tool designed to manage driver assignments, shifts, and routes efficiently.

**Key Features:**
• **Schedule Grid**: Visual representation of all driver assignments across days
• **Driver Management**: Track driver information, seniority, and availability
• **Shift Patterns**: Define and manage different shift types (Early, Late, Night)
• **Optimization Engine**: Automatically optimize schedules based on constraints
• **Reports**: Generate detailed reports for analysis and compliance

Use the left panel to view and edit schedules, and the right panel (this AI Assistant) for help and guidance.`,
    relatedTopics: ['navigation', 'schedule-grid', 'drivers']
  },
  {
    id: 'gs-2',
    category: 'getting-started',
    keywords: ['navigate', 'navigation', 'find', 'where', 'menu', 'toolbar', 'interface', 'ui'],
    question: 'How do I navigate the application?',
    answer: `**Main Navigation Areas:**

1. **Top Bar**: Contains filters, search, and action buttons
   • Use the search box to find specific drivers
   • Click "Filter" to narrow down the view
   • "Allocate" button assigns shifts to drivers

2. **Schedule Grid**: The main working area
   • Rows represent drivers
   • Columns represent days
   • Click on cells to view or edit assignments

3. **Left Sidebar**: Driver list and quick filters
   • Shows all available drivers
   • Displays shift labels and seniority

4. **AI Assistant** (this panel): Get help anytime
   • Ask questions about any feature
   • Get step-by-step guidance

**Keyboard Shortcuts:**
• \`Ctrl+F\`: Open search
• \`Escape\`: Close dialogs
• \`Arrow keys\`: Navigate grid cells`,
    relatedTopics: ['toolbar', 'grid', 'shortcuts']
  },

  // ===== DRIVER MANAGEMENT =====
  {
    id: 'drv-1',
    category: 'drivers',
    keywords: ['driver', 'drivers', 'employee', 'staff', 'worker', 'add driver', 'new driver', 'create driver'],
    question: 'How do I add a new driver?',
    answer: `**To add a new driver:**

1. Click the **"Add Driver"** button in the toolbar (or use the menu)
2. Fill in the required information:
   • **Name**: Full name of the driver
   • **Employee ID**: Unique identifier (e.g., 324099)
   • **Shift Pattern**: Default shift type (Early, Late, Night)
   • **Seniority**: Years of experience (affects priority in assignments)

3. Click **"Save"** to add the driver to the system

**Tips:**
• Import multiple drivers at once using the Excel import feature
• Drivers can be assigned to specific depots or routes
• Seniority affects automatic scheduling priority`,
    relatedTopics: ['import-drivers', 'seniority', 'shift-patterns']
  },
  {
    id: 'drv-2',
    category: 'drivers',
    keywords: ['seniority', 'experience', 'priority', 'years', 'ranking'],
    question: 'What is driver seniority and how does it work?',
    answer: `**Driver Seniority** represents the years of experience a driver has and affects scheduling priority.

**How Seniority Works:**
• Measured in years of service
• Higher seniority = higher priority for preferred shifts
• Used by the optimization engine to resolve conflicts
• Affects overtime and vacation allocation

**Current Driver Example:**
James Joyce (ID: 324099) has **4 years** of seniority and is assigned to the "Early" shift pattern.

**Seniority Rules:**
1. Drivers with more seniority get first pick of shifts
2. Overtime is distributed considering seniority preferences
3. Holiday shifts can be assigned based on seniority rotation

**To update seniority:**
1. Click on the driver's name in the grid
2. Open the driver profile
3. Edit the seniority field
4. Save changes`,
    relatedTopics: ['drivers', 'shift-priority', 'overtime']
  },
  {
    id: 'drv-3',
    category: 'drivers',
    keywords: ['assign', 'assignment', 'allocate', 'schedule driver', 'give shift'],
    question: 'How do I assign a driver to a shift?',
    answer: `**Assigning Drivers to Shifts:**

**Method 1: Direct Cell Assignment**
1. Click on an empty cell in the schedule grid
2. Select the shift from the dropdown
3. The driver is now assigned

**Method 2: Using Allocate Button**
1. Select the driver(s) and date(s)
2. Click the **"Allocate"** button in the toolbar
3. Choose the shift type or specific shift
4. Confirm the assignment

**Method 3: Drag and Drop**
1. Find the shift in the available shifts panel
2. Drag it to the desired driver's row
3. Drop it on the correct day

**Validation:**
• The system checks for conflicts automatically
• Warning icons appear if rules are violated
• Red cells indicate scheduling errors

**Bulk Assignment:**
Select multiple cells using \`Shift+Click\` to assign the same shift to multiple drivers or days at once.`,
    relatedTopics: ['shifts', 'conflicts', 'validation']
  },
  {
    id: 'drv-4',
    category: 'drivers',
    keywords: ['availability', 'available', 'unavailable', 'vacation', 'leave', 'time off', 'sick'],
    question: 'How do I manage driver availability?',
    answer: `**Managing Driver Availability:**

**Setting Unavailability:**
1. Click on the driver's row in the schedule
2. Select the days they're unavailable
3. Choose the reason:
   • **Vacation**: Pre-approved time off
   • **Sick Leave**: Medical absence
   • **Training**: Required training sessions
   • **Personal**: Other approved absences

**Visual Indicators:**
• 🟡 Yellow: Vacation/Planned absence
• 🔴 Red: Unavailable/Conflict
• ⚪ Gray: No assignment
• 🟢 Green: Available and assigned

**Recurring Unavailability:**
For regular patterns (e.g., every Sunday off):
1. Go to Driver Profile
2. Set up recurring unavailability rules
3. These will apply automatically to future schedules

**Tips:**
• Block out unavailability before running optimization
• The system won't assign shifts during blocked periods
• Use the calendar view for a clear overview`,
    relatedTopics: ['calendar', 'vacation-planning', 'coverage']
  },

  // ===== SHIFTS & SCHEDULES =====
  {
    id: 'shift-1',
    category: 'shifts',
    keywords: ['shift', 'shifts', 'types', 'early', 'late', 'night', 'pattern', 'patterns'],
    question: 'What shift types are available?',
    answer: `**Available Shift Types:**

| Shift Type | Code | Typical Hours | Description |
|------------|------|---------------|-------------|
| **Early** | EA | 05:00 - 12:00 | Morning routes |
| **Day** | DA | 08:00 - 16:00 | Standard daytime |
| **Late** | LA | 14:00 - 22:00 | Afternoon/Evening |
| **Night** | NI | 22:00 - 06:00 | Overnight routes |
| **Split** | SP | Various | Split across two periods |

**Shift Patterns:**
Drivers can be assigned to patterns that repeat weekly:
• **5/2**: 5 days on, 2 days off
• **4/3**: 4 days on, 3 days off
• **Rotating**: Cycles through different shifts

**Current Example:**
Shift "1025 (EA)" runs from 05:00-12:00 and is an Early shift type.

**Creating Custom Shifts:**
1. Go to Settings → Shift Configuration
2. Click "New Shift"
3. Define start/end times and breaks
4. Set the shift code and type`,
    relatedTopics: ['shift-patterns', 'scheduling', 'breaks']
  },
  {
    id: 'shift-2',
    category: 'shifts',
    keywords: ['schedule', 'weekly', 'view', 'grid', 'calendar', 'timeline'],
    question: 'How do I view the weekly schedule?',
    answer: `**Viewing the Weekly Schedule:**

The **Schedule Grid** displays the current planning period:

**Grid Layout:**
• **Rows**: Each row represents one driver
• **Columns**: Each column represents one day
• **Cells**: Show assigned shifts with codes and times

**Current View (Example):**
| Day | Date | Status |
|-----|------|--------|
| FRI | 16 | Good ✓ |
| SAT | 17 | Good ✓ |
| SUN | 18 | Good ✓ |
| MON | 19 | Good ✓ |
| TUE | 20 | Good ✓ |
| ... | ... | ... |

**Changing Views:**
• **Week View**: Default 7-day display
• **2-Week View**: Extended planning horizon
• **Month View**: Full month overview

**Navigation:**
• Use arrow buttons to move between weeks
• Click on a date to jump directly
• Use the date picker for specific dates

**Filtering:**
• Filter by driver name or ID
• Filter by shift type
• Show only conflicts or warnings`,
    relatedTopics: ['navigation', 'filters', 'date-picker']
  },
  {
    id: 'shift-3',
    category: 'shifts',
    keywords: ['conflict', 'conflicts', 'error', 'warning', 'overlap', 'violation', 'red', 'problem'],
    question: 'What do conflicts and warnings mean?',
    answer: `**Understanding Conflicts and Warnings:**

**Cell Status Types:**

🟢 **Default (Green/Normal)**: Valid assignment, no issues

🟡 **Warning (Yellow)**:
• Minor rule violation that can proceed
• Examples: Close to overtime limit, preference mismatch
• Review recommended but not blocking

🔴 **Error (Red)**:
• Critical violation that should be fixed
• Examples: Shift overlap, rest time violation, unavailable driver
• May prevent schedule publishing

**Common Conflict Types:**

1. **Shift Overlap**: Two shifts assigned at the same time
2. **Rest Time Violation**: Not enough rest between shifts (usually 11 hours required)
3. **Overtime Exceeded**: Driver exceeds weekly hour limit
4. **Qualification Missing**: Driver lacks required certification
5. **Availability Conflict**: Shift during blocked time

**Resolving Conflicts:**
1. Click on the red/yellow cell
2. View the conflict details in the popup
3. Either reassign or acknowledge the exception
4. Use "Swap" to exchange shifts between drivers

**Tip:** Run the "Validate Schedule" action to check all conflicts at once.`,
    relatedTopics: ['validation', 'rules', 'fixing-errors']
  },

  // ===== OPTIMIZATION =====
  {
    id: 'opt-1',
    category: 'optimization',
    keywords: ['optimize', 'optimization', 'automatic', 'auto', 'improve', 'best', 'efficient'],
    question: 'How does schedule optimization work?',
    answer: `**Schedule Optimization** automatically improves your schedule to meet defined goals while respecting constraints.

**How to Run Optimization:**
1. Click the **"Optimize"** button in the toolbar
2. Select optimization goals:
   • Minimize overtime costs
   • Maximize driver preferences
   • Balance workload distribution
   • Minimize deadhead travel
3. Set constraints (must-have rules)
4. Click **"Run Optimization"**

**Optimization Goals:**

| Goal | Description |
|------|-------------|
| **Cost** | Minimize total labor and overtime costs |
| **Preference** | Honor driver shift preferences |
| **Balance** | Even distribution of hours |
| **Coverage** | Ensure all shifts are filled |

**What Optimization Does:**
• Swaps shifts between drivers for better fit
• Fills gaps with available drivers
• Removes unnecessary overtime
• Respects all hard constraints

**After Optimization:**
• Review suggested changes
• Accept all or select specific changes
• Compare before/after metrics

**Tip:** Run optimization regularly as schedules change.`,
    relatedTopics: ['constraints', 'goals', 'cost-reduction']
  },
  {
    id: 'opt-2',
    category: 'optimization',
    keywords: ['constraint', 'constraints', 'rule', 'rules', 'limit', 'restriction', 'requirement'],
    question: 'What constraints can I set for optimization?',
    answer: `**Optimization Constraints** are rules the system must follow:

**Hard Constraints** (Never Violated):
• Maximum weekly hours (e.g., 40 hours)
• Minimum rest between shifts (e.g., 11 hours)
• Required qualifications for routes
• Labor law compliance
• Driver unavailability

**Soft Constraints** (Preferred but Flexible):
• Driver shift preferences
• Seniority priority
• Preferred routes
• Consecutive days off

**Setting Up Constraints:**

1. **Global Settings**: Apply to all schedules
   - Go to Settings → Scheduling Rules
   - Configure defaults

2. **Per-Schedule**: Override for specific periods
   - Click "Constraints" in the schedule view
   - Add or modify rules

**Common Constraint Examples:**

\`\`\`
Max Weekly Hours: 40
Min Rest Period: 11 hours
Max Consecutive Days: 6
Required Days Off: 1 per week
Overtime Threshold: 8 hours/day
\`\`\`

**Constraint Priority:**
When conflicts occur, higher priority constraints take precedence. Legal requirements are always highest priority.`,
    relatedTopics: ['optimization', 'labor-laws', 'preferences']
  },

  // ===== REPORTS & EXPORT =====
  {
    id: 'rep-1',
    category: 'reports',
    keywords: ['report', 'reports', 'export', 'download', 'excel', 'pdf', 'print'],
    question: 'How can I export reports?',
    answer: `**Exporting Reports and Data:**

**Quick Export:**
1. Click the **"Export"** button in the toolbar
2. Choose format:
   • **Excel (.xlsx)**: Full data with formatting
   • **CSV**: Raw data for analysis
   • **PDF**: Print-ready document
3. Select date range
4. Click **"Download"**

**Available Reports:**

| Report | Description |
|--------|-------------|
| **Schedule Summary** | Overview of all assignments |
| **Driver Hours** | Hours worked per driver |
| **Overtime Report** | Overtime breakdown |
| **Coverage Analysis** | Shift coverage statistics |
| **Cost Report** | Labor cost analysis |
| **Compliance Report** | Rule violations summary |

**Custom Reports:**
1. Go to Reports → Create Custom
2. Select data fields to include
3. Add filters and groupings
4. Save template for future use

**Scheduled Exports:**
Set up automatic exports:
1. Go to Settings → Scheduled Reports
2. Choose report type and frequency
3. Set email recipients
4. Reports will be sent automatically

**Tip:** Use Excel exports for further analysis in spreadsheet tools.`,
    relatedTopics: ['excel', 'pdf', 'scheduled-reports']
  },
  {
    id: 'rep-2',
    category: 'reports',
    keywords: ['protocol', 'protocols', 'log', 'audit', 'history', 'changes', 'track'],
    question: 'How do I view change history and protocols?',
    answer: `**Change History and Audit Protocols:**

**Viewing Change History:**
1. Click on any cell or driver
2. Select **"View History"** from the menu
3. See all changes with timestamps and users

**History Information Includes:**
• Date and time of change
• User who made the change
• Previous value
• New value
• Reason (if provided)

**Audit Protocol Export:**
1. Go to Reports → Audit Protocol
2. Select date range
3. Filter by:
   • User
   • Change type
   • Driver/Shift
4. Export as PDF or Excel

**Protocol Types:**

| Type | Tracks |
|------|--------|
| **Assignment Changes** | Shift assignments modified |
| **Driver Updates** | Driver profile changes |
| **Schedule Publications** | When schedules were published |
| **Optimization Runs** | Automatic changes from optimizer |

**Compliance:**
These protocols help with:
• Labor law compliance
• Dispute resolution
• Performance tracking
• Audit requirements`,
    relatedTopics: ['audit', 'compliance', 'tracking']
  },

  // ===== DEADHEAD MANAGEMENT =====
  {
    id: 'dead-1',
    category: 'deadheads',
    keywords: ['deadhead', 'deadheads', 'catalog', 'import', 'travel', 'empty', 'non-revenue'],
    question: 'How do I add a deadhead catalog?',
    answer: `**Adding a Deadhead Catalog:**

A **deadhead** is non-revenue travel (e.g., driving an empty bus between locations).

**Import from Excel:**
1. Go to **Menu → Deadhead Catalog**
2. Click **"Import"**
3. Select your Excel file (.xlsx)
4. Map columns to fields:
   • Origin location
   • Destination location
   • Distance (km/miles)
   • Travel time (minutes)
   • Cost per trip
5. Click **"Import"**

**Excel Format Required:**
\`\`\`
| From      | To        | Distance | Time | Cost  |
|-----------|-----------|----------|------|-------|
| Depot A   | Terminal 1| 15 km    | 20   | $25   |
| Terminal 1| Depot B   | 22 km    | 30   | $35   |
\`\`\`

**Manual Entry:**
1. Go to Deadhead Catalog
2. Click **"Add Entry"**
3. Fill in origin, destination, distance, time
4. Save

**Using Deadheads:**
• Deadheads are automatically calculated in optimization
• Shown as dotted lines in route views
• Included in cost reports

**Tip:** Keep your deadhead catalog updated for accurate cost calculations.`,
    relatedTopics: ['catalog', 'import', 'travel-time']
  },
  {
    id: 'dead-2',
    category: 'deadheads',
    keywords: ['depot', 'depots', 'location', 'locations', 'terminal', 'garage'],
    question: 'How do I manage depots and locations?',
    answer: `**Managing Depots and Locations:**

**What are Depots?**
Depots are key locations where:
• Vehicles are stored overnight
• Drivers start and end their shifts
• Maintenance is performed

**Adding a New Depot:**
1. Go to Settings → Locations
2. Click **"Add Depot"**
3. Enter details:
   • Name (e.g., "Central Garage")
   • Address
   • Coordinates (for mapping)
   • Capacity (number of vehicles)
4. Save

**Location Types:**

| Type | Purpose |
|------|---------|
| **Depot** | Vehicle storage and driver base |
| **Terminal** | Passenger boarding point |
| **Checkpoint** | Route waypoint |
| **Relief Point** | Driver changeover location |

**Assigning Drivers to Depots:**
1. Open driver profile
2. Set "Home Depot"
3. This affects scheduling and deadhead calculations

**Multi-Depot Operations:**
• Drivers can be assigned to multiple depots
• System optimizes assignments to minimize deadheads
• Reports can be filtered by depot`,
    relatedTopics: ['deadheads', 'driver-assignment', 'locations']
  },

  // ===== RULES & CONSTRAINTS =====
  {
    id: 'rule-1',
    category: 'rules',
    keywords: ['labor', 'law', 'legal', 'compliance', 'hours', 'maximum', 'minimum', 'regulation'],
    question: 'What labor law rules are enforced?',
    answer: `**Labor Law Compliance:**

The system enforces common labor regulations:

**Working Hours:**
• Maximum daily hours: 8-10 hours (configurable)
• Maximum weekly hours: 40-48 hours
• Maximum consecutive days: 6 days
• Minimum weekly rest: 24-48 consecutive hours

**Rest Periods:**
• Minimum between shifts: 11 hours
• Meal break requirements: 30-60 min for shifts >6 hours
• Daily rest period: 11 consecutive hours

**Overtime Rules:**
• Defined after threshold (e.g., >8 hours/day)
• Weekly overtime cap
• Premium pay tracking

**Visual Indicators:**
🔴 **Violation**: Rule is broken, must fix
🟡 **Warning**: Approaching limit
🟢 **Compliant**: All rules satisfied

**Configuring Rules:**
1. Go to Settings → Labor Rules
2. Select your jurisdiction/region
3. Customize thresholds as needed
4. Save

**Compliance Reports:**
Generate reports showing:
• All violations in period
• Drivers at risk
• Hours summary
• Audit trail

**Note:** Always verify rules match your local regulations.`,
    relatedTopics: ['compliance', 'overtime', 'rest-periods']
  },
  {
    id: 'rule-2',
    category: 'rules',
    keywords: ['overtime', 'extra', 'hours', 'premium', 'pay', 'cost'],
    question: 'How is overtime calculated?',
    answer: `**Overtime Calculation:**

**What Counts as Overtime:**
• Hours beyond daily threshold (default: 8 hours)
• Hours beyond weekly threshold (default: 40 hours)
• Work on designated rest days
• Holiday work

**Overtime Tiers:**

| Tier | Trigger | Rate |
|------|---------|------|
| **Regular OT** | >8 hrs/day or >40 hrs/week | 1.5x |
| **Extended OT** | >10 hrs/day or >50 hrs/week | 2.0x |
| **Holiday** | Work on holidays | 2.0x |
| **Rest Day** | Scheduled day off | 1.5x |

**Viewing Overtime:**
1. Check the Hours column in driver list
2. Red highlight indicates overtime
3. Click to see breakdown

**Overtime Report:**
• Shows overtime by driver
• Calculates cost impact
• Trends over time

**Minimizing Overtime:**
• Use optimization to balance workload
• Set overtime warnings at 90% of threshold
• Review weekly before publishing

**Configuration:**
1. Settings → Overtime Rules
2. Set thresholds and rates
3. Define holiday calendar
4. Save`,
    relatedTopics: ['labor-laws', 'costs', 'scheduling']
  },

  // ===== TROUBLESHOOTING =====
  {
    id: 'ts-1',
    category: 'troubleshooting',
    keywords: ['error', 'problem', 'issue', 'not working', 'help', 'fix', 'broken', 'bug'],
    question: 'The schedule is not saving. What should I do?',
    answer: `**Troubleshooting Save Issues:**

**Common Causes & Solutions:**

1. **Validation Errors**
   • Check for red cells indicating conflicts
   • Resolve all errors before saving
   • Click "Validate" to see full error list

2. **Permission Issues**
   • Ensure you have edit permissions
   • Check if schedule is locked by another user
   • Contact admin if access is needed

3. **Network Problems**
   • Check your internet connection
   • Try refreshing the page
   • Look for connection status indicator

4. **Unsaved Changes Warning**
   • Don't navigate away while saving
   • Wait for confirmation message
   • Use "Save Draft" for work-in-progress

**Steps to Resolve:**
1. Click **"Validate Schedule"**
2. Fix any reported errors
3. Try saving again
4. If still failing, try:
   - Refresh the page (save draft first!)
   - Clear browser cache
   - Try a different browser

**Still Having Issues?**
• Check the browser console for errors (F12)
• Note any error messages
• Contact support with details`,
    relatedTopics: ['validation', 'permissions', 'errors']
  },
  {
    id: 'ts-2',
    category: 'troubleshooting',
    keywords: ['slow', 'performance', 'loading', 'lag', 'freeze', 'stuck'],
    question: 'The application is running slowly. How can I improve performance?',
    answer: `**Improving Application Performance:**

**Quick Fixes:**
1. **Refresh the page** (Ctrl+F5 for hard refresh)
2. **Close other browser tabs** to free memory
3. **Clear browser cache** (Settings → Clear browsing data)

**Reduce Data Load:**
• Filter to show fewer drivers
• Reduce date range displayed
• Close unused panels

**Browser Recommendations:**
• Use Chrome, Firefox, or Edge (latest versions)
• Enable hardware acceleration
• Disable unnecessary extensions

**System Requirements:**
• Minimum 8GB RAM recommended
• Stable internet connection
• Modern browser (2022 or newer)

**Large Dataset Tips:**
• Use pagination for driver lists
• Export data for offline analysis
• Request data archiving for old schedules

**If Problems Persist:**
1. Try incognito/private mode
2. Test in a different browser
3. Check if others have same issue
4. Report to support with:
   - Browser version
   - Screen size
   - Steps to reproduce`,
    relatedTopics: ['browser', 'requirements', 'support']
  },
  {
    id: 'ts-3',
    category: 'troubleshooting',
    keywords: ['import', 'upload', 'file', 'excel', 'csv', 'failed', 'format'],
    question: 'My data import failed. What could be wrong?',
    answer: `**Troubleshooting Import Failures:**

**Common Import Issues:**

1. **Wrong File Format**
   • Use .xlsx for Excel, .csv for CSV
   • Don't use .xls (old Excel format)
   • Ensure file isn't corrupted

2. **Column Mapping Errors**
   • Check column headers match expected names
   • Required fields must not be empty
   • Date formats should be consistent

3. **Data Validation Failures**
   • Employee IDs must be unique
   • Dates must be valid
   • Numbers shouldn't have text

**Required Format Example:**
\`\`\`
| EmployeeID | Name        | ShiftPattern | Seniority |
|------------|-------------|--------------|-----------|
| 324099     | James Joyce | Early        | 4         |
| 324100     | Sarah Smith | Late         | 2         |
\`\`\`

**Fixing Common Issues:**

• **Date Format**: Use YYYY-MM-DD or MM/DD/YYYY
• **Empty Cells**: Fill required fields or remove row
• **Special Characters**: Remove unusual symbols
• **Extra Spaces**: Trim whitespace from values

**Import Process:**
1. Download the template first
2. Fill in your data matching the template
3. Validate before importing
4. Review error log if import fails
5. Fix issues and retry

**Tip:** Start with a small test file before importing large datasets.`,
    relatedTopics: ['excel', 'data-format', 'validation']
  },

  // ===== ADDITIONAL HELPFUL ENTRIES =====
  {
    id: 'help-1',
    category: 'getting-started',
    keywords: ['shortcut', 'shortcuts', 'keyboard', 'hotkey', 'hotkeys', 'quick'],
    question: 'What keyboard shortcuts are available?',
    answer: `**Keyboard Shortcuts:**

**Navigation:**
| Shortcut | Action |
|----------|--------|
| \`Ctrl + F\` | Open search |
| \`Escape\` | Close dialog/panel |
| \`Arrow Keys\` | Navigate grid cells |
| \`Tab\` | Move to next field |
| \`Enter\` | Confirm selection |

**Editing:**
| Shortcut | Action |
|----------|--------|
| \`Ctrl + S\` | Save schedule |
| \`Ctrl + Z\` | Undo last action |
| \`Ctrl + Y\` | Redo action |
| \`Delete\` | Clear selected cell |
| \`Ctrl + C\` | Copy selection |
| \`Ctrl + V\` | Paste |

**Selection:**
| Shortcut | Action |
|----------|--------|
| \`Shift + Click\` | Select range |
| \`Ctrl + Click\` | Add to selection |
| \`Ctrl + A\` | Select all visible |

**Views:**
| Shortcut | Action |
|----------|--------|
| \`Ctrl + 1\` | Week view |
| \`Ctrl + 2\` | 2-week view |
| \`Ctrl + 3\` | Month view |

**Tip:** Press \`?\` to show this shortcuts panel anytime.`,
    relatedTopics: ['navigation', 'efficiency', 'tips']
  },
  {
    id: 'help-2',
    category: 'getting-started',
    keywords: ['filter', 'filters', 'search', 'find', 'clear', 'reset'],
    question: 'How do I use filters effectively?',
    answer: `**Using Filters:**

**Quick Search:**
• Type in the search box to find drivers by name or ID
• Results update as you type
• Press Enter to apply

**Advanced Filters:**
1. Click the **"Filter"** button
2. Choose filter criteria:
   • **Shift Type**: Early, Late, Night
   • **Depot**: Filter by location
   • **Status**: Assigned, Unassigned, Conflict
   • **Seniority Range**: Filter by experience

**Filter Combinations:**
• Multiple filters work together (AND logic)
• Use "Clear Filters" to reset all
• Save filter presets for repeated use

**Filter Examples:**
• "Show all unassigned drivers for Monday"
• "Show early shift conflicts only"
• "Show drivers with >5 years seniority"

**Visual Feedback:**
• Active filters shown as tags
• Click X on tag to remove filter
• Filter icon shows dot when active

**Saving Filter Presets:**
1. Set up your filters
2. Click "Save Filter"
3. Name your preset
4. Access from dropdown anytime

**Tip:** The "Clear" button resets search and all filters to show everything.`,
    relatedTopics: ['search', 'navigation', 'presets']
  },
  {
    id: 'help-3',
    category: 'shifts',
    keywords: ['swap', 'switch', 'exchange', 'trade', 'change', 'move'],
    question: 'How do I swap shifts between drivers?',
    answer: `**Swapping Shifts Between Drivers:**

**Quick Swap:**
1. Right-click on the shift you want to swap
2. Select **"Swap With..."**
3. Click on the target driver's cell
4. Confirm the swap

**Drag and Drop Swap:**
1. Hold \`Ctrl\` key
2. Drag the shift to another driver's cell
3. Release to swap (shifts exchange places)

**Swap Validation:**
The system checks:
• Both drivers are available
• No rule violations result
• Required qualifications are met

**Bulk Swaps:**
1. Select multiple shifts
2. Use "Bulk Actions" → "Swap Selected"
3. Choose target drivers
4. Review and confirm

**Swap Requests (Self-Service):**
If enabled, drivers can:
1. Request to swap shifts with colleagues
2. Manager reviews and approves
3. Swap is applied if approved

**Viewing Swap History:**
• Right-click any cell
• Select "View History"
• See all swaps with timestamps

**Tip:** Swaps are a great way to resolve conflicts without removing assignments.`,
    relatedTopics: ['conflicts', 'assignments', 'driver-requests']
  },
  {
    id: 'help-4',
    category: 'reports',
    keywords: ['hours', 'worked', 'total', 'summary', 'weekly', 'daily'],
    question: 'How do I see total hours worked by drivers?',
    answer: `**Viewing Driver Hours:**

**Quick View:**
• Hours are displayed in the driver list (right column)
• Color coding shows status:
  - 🟢 Green: Under limit
  - 🟡 Yellow: Approaching limit
  - 🔴 Red: Over limit/overtime

**Detailed Hours View:**
1. Click on a driver's name
2. Open the **"Hours"** tab
3. See breakdown:
   • Regular hours
   • Overtime hours
   • Break time
   • Total time

**Weekly Summary:**
The header row shows:
• Total scheduled hours
• Coverage percentage
• Overtime total

**Hours Report:**
1. Go to Reports → Driver Hours
2. Select date range
3. Choose grouping (daily/weekly/monthly)
4. Export or view on screen

**Report Columns:**
| Column | Description |
|--------|-------------|
| Driver | Name and ID |
| Regular | Normal hours |
| Overtime | Extra hours |
| Breaks | Total break time |
| Net | Actual worked time |

**Tip:** Use this data to balance workloads and control overtime costs.`,
    relatedTopics: ['overtime', 'reports', 'costs']
  },
  {
    id: 'help-5',
    category: 'getting-started',
    keywords: ['publish', 'release', 'finalize', 'lock', 'approve', 'send'],
    question: 'How do I publish a schedule?',
    answer: `**Publishing a Schedule:**

Publishing makes the schedule official and visible to drivers.

**Before Publishing:**
1. ✅ Resolve all conflicts (no red cells)
2. ✅ Review warnings (yellow cells)
3. ✅ Verify coverage is complete
4. ✅ Check overtime is acceptable
5. ✅ Run final validation

**Publishing Steps:**
1. Click **"Publish"** in the toolbar
2. Select the date range to publish
3. Choose notification options:
   • Email drivers
   • Push notification
   • No notification
4. Add optional notes
5. Confirm publish

**After Publishing:**
• Schedule becomes read-only
• Drivers can view their assignments
• Changes require "Unpublish" first
• Audit trail records the publication

**Making Changes After Publish:**
1. Click "Unpublish" or "Edit Published"
2. Make necessary changes
3. Re-publish
4. Drivers are notified of changes

**Schedule Status:**
| Status | Meaning |
|--------|---------|
| **Draft** | Work in progress |
| **Review** | Ready for approval |
| **Published** | Official and active |
| **Archived** | Historical record |

**Tip:** Set a publishing deadline to ensure drivers have time to prepare.`,
    relatedTopics: ['workflow', 'notifications', 'drivers']
  }
];

/**
 * Search the knowledge base for relevant answers
 */
export function searchKnowledge(query: string): KnowledgeEntry[] {
  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(/\s+/).filter(w => w.length > 2);

  // Score each entry based on keyword matches
  const scored = KNOWLEDGE_BASE.map(entry => {
    let score = 0;

    // Check exact phrase match in question
    if (entry.question.toLowerCase().includes(lowerQuery)) {
      score += 10;
    }

    // Check keyword matches
    for (const keyword of entry.keywords) {
      if (lowerQuery.includes(keyword)) {
        score += 3;
      }
      for (const word of words) {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 1;
        }
      }
    }

    // Check if words appear in question or answer
    for (const word of words) {
      if (entry.question.toLowerCase().includes(word)) {
        score += 2;
      }
      if (entry.answer.toLowerCase().includes(word)) {
        score += 0.5;
      }
    }

    return { entry, score };
  });

  // Return entries with score > 0, sorted by score
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.entry);
}

/**
 * Get a single best answer for a query
 */
export function getBestAnswer(query: string): string {
  const results = searchKnowledge(query);

  if (results.length === 0) {
    return getDefaultResponse(query);
  }

  const best = results[0];

  // If there are related topics, mention them
  let response = best.answer;

  if (results.length > 1) {
    const relatedQuestions = results.slice(1, 3).map(r => `• ${r.question}`).join('\n');
    response += `\n\n**Related Questions:**\n${relatedQuestions}`;
  }

  return response;
}

/**
 * Get a helpful default response when no match is found
 */
function getDefaultResponse(query: string): string {
  const suggestions = [
    'How do I add a new driver?',
    'What shift types are available?',
    'How does optimization work?',
    'How can I export reports?',
    'What do conflicts mean?'
  ];

  return `I don't have specific information about "${query}", but I can help with many workforce planning topics.

**Try asking about:**
${suggestions.map(s => `• ${s}`).join('\n')}

**Main Topics I Can Help With:**
• Driver management and assignments
• Shifts and scheduling
• Optimization and constraints
• Reports and exports
• Rules and compliance
• Troubleshooting issues

Feel free to ask a specific question!`;
}

/**
 * Get suggested questions for the empty state
 */
export function getSuggestedQuestions(): { title: string; description: string; query: string }[] {
  return [
    {
      title: 'How to manage drivers?',
      description: 'Learn about adding, editing, and assigning drivers',
      query: 'How do I add and manage drivers?'
    },
    {
      title: 'Understanding shifts',
      description: 'Explore shift types, patterns, and scheduling',
      query: 'What shift types are available?'
    },
    {
      title: 'Optimize my schedule',
      description: 'Automatically improve schedules to meet goals',
      query: 'How does schedule optimization work?'
    },
    {
      title: 'Export reports',
      description: 'Download schedules and data for analysis',
      query: 'How can I export reports?'
    },
    {
      title: 'Resolve conflicts',
      description: 'Understand and fix scheduling conflicts',
      query: 'What do conflicts and warnings mean?'
    },
    {
      title: 'Keyboard shortcuts',
      description: 'Speed up your work with hotkeys',
      query: 'What keyboard shortcuts are available?'
    }
  ];
}
